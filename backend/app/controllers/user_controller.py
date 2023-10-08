from sqlalchemy.orm import Session, selectinload
from fastapi import HTTPException, status
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt


from app.config import ALGORITHM, SECRET_KEY
from sqlalchemy import select, update, delete
from app.models.user_model import User, Skill
from app.schemas import UserBase, UserLogin, UserUpdate, SkillBase, SkillUpdate

crypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def crud_login_user(user: UserLogin, session_db: Session, expires_delta: int = 30):
    query_user = session_db.execute(select(User).where(User.username == user.username))
    db_user = query_user.scalar_one_or_none()

    if db_user is None or not db_user.verify_password(user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credentials icorrect",
        )

    access_token_expires = datetime.utcnow() + timedelta(minutes=expires_delta)
    payload = {
        "sub": db_user.email,
        "exp": access_token_expires,
    }
    access_token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

    return {"access_token": access_token, "expires": access_token_expires.isoformat()}


def crud_create_user(user: UserBase, skills: list[SkillBase], session_db: Session):
    query_user = session_db.execute(
        select(User).where(User.email == user.email and User.username == user.username)
    )
    db_user = query_user.scalar_one_or_none()
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User already exists",
        )

    db_user = User(
        email=user.email,
        username=user.username,
        hashed_password=crypt_context.hash(user.hashed_password),
        profile_picture=user.profile_picture,
        profile_type=user.profile_type,
        disponibility=user.disponibility,
    )
    session_db.add(db_user)
    session_db.commit()
    for skill in skills:
        db_skill = Skill(
            name=skill.name,
            user_id=db_user.id,
        )
        session_db.add(db_skill)
    session_db.commit()


def crud_get_user(user: UserBase, session_db: Session):
    query_user = session_db.execute(
        select(User)
        .where(User.email == user.email and User.username == user.username)
        .options(selectinload(User.skills))
    )
    db_user = query_user.scalar_one_or_none()
    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User not exists",
        )
    return db_user

def crud_get_users(session_db: Session):
    query_users = session_db.execute(select(User).options(selectinload(User.skills)))
    db_users = query_users.scalars().all()
    return db_users


def crud_update_user(
    password_confirmation: str,
    current_user: UserBase,
    update_user: UserUpdate,
    session_db: Session,
):
    if not current_user.verify_password(password_confirmation):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Password incorrect",
        )
    session_db.execute(
        update(User)
        .where(User.email == current_user.email)
        .values(
            email=update_user.email if update_user.email else current_user.email,
            username=update_user.username
            if update_user.username
            else current_user.username,
            hashed_password=crypt_context.hash(update_user.password)
            if update_user.password
            else current_user.hashed_password,
        )
    )
    session_db.commit()


def crud_delete_user(user, password: str, session_db: Session):
    if not user.verify_password(password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Password incorrect",
        )
    session_db.execute(delete(User).where(User.email == user.email))
    session_db.commit()
