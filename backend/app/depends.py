from fastapi.security import OAuth2PasswordBearer
from fastapi import HTTPException, status, Depends
from jose import jwt, JWTError

from sqlalchemy.sql.expression import select
from .database import SessionLocal
from .models.user_model import User


from app.config import ALGORITHM, SECRET_KEY

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/user/login", auto_error=False, scheme_name="Bearer"
)


def get_session_current_db():
    try:
        session_current = SessionLocal()
        yield session_current
    finally:
        session_current.close()


def verify_token(
    token: str = Depends(oauth2_scheme),
    session_db: SessionLocal = Depends(get_session_current_db),
):
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not authenticated or token invalid",
        )
    try:
        payload = jwt.decode(token, key=SECRET_KEY, algorithms=[ALGORITHM])

    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token invalid or expired",
        )

    query = session_db.execute(select(User).where(User.email == payload.get("sub")))
    user = query.scalar_one_or_none()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found or token invalid",
        )
    return user
