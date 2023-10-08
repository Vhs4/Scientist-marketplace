from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session, selectinload
from sqlalchemy import select, insert

from app.schemas import PostCreate, Post, SkillBase

from app.models.user_model import User, Post, Request, Skill
from app.depends import get_session_current_db, verify_token

post_router = APIRouter(prefix="/user/ports")


@post_router.post(
    "/create_post",
    status_code=status.HTTP_201_CREATED,
    dependencies=[Depends(verify_token)],
)
def create_post(
    post: PostCreate,
    skills: list[SkillBase],
    user_current: User = Depends(verify_token),
    session_db: Session = Depends(get_session_current_db),
):
    if not user_current:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not authenticated or token invalid",
        )
    try:
        db_post = Post(
            title=post.title,
            content=post.content,
            user_id=user_current.id,
        )
        session_db.add(db_post)
        session_db.commit()
        for skill in skills:
            db_skill = Skill(
                name=skill.name,
                user_id=user_current.id,
                post_id=db_post.id,
            )
            session_db.add(db_skill)
        session_db.commit()
        return {"message": "Post created successfully"}
    except:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error creating post",
        )


@post_router.get("/get_posts", status_code=status.HTTP_200_OK)
def get_posts(
    user_current: User = Depends(verify_token),
    session_db: Session = Depends(get_session_current_db),
):
    if not user_current:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not authenticated or token invalid",
        )
    try:
        query = session_db.execute(select(Post).where(Post.user_id == user_current.id))
        posts = query.scalars().all()
        return posts
    except:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error getting posts",
        )


@post_router.post("/{post_id}/create_request", status_code=status.HTTP_201_CREATED)
def create_request(
    post_id: int,
    user_current: User = Depends(verify_token),
    session_db: Session = Depends(get_session_current_db),
):
    if not user_current:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not authenticated or token invalid",
        )
    try:
        session_db.execute(
            insert(Request).values(interested_user_id=user_current.id, post_id=post_id)
        )

        session_db.commit()
        return {"message": "Request created successfully"}
    except:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error creating request",
        )


@post_router.get("/get_requests", status_code=status.HTTP_200_OK)
def get_requests(
    user_current: User = Depends(verify_token),
    session_db: Session = Depends(get_session_current_db),
):
    if not user_current:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not authenticated or token invalid",
        )
    try:
        query = session_db.execute(
            select(Request, User)
            .join(User)
            .where(Request.post_id == user_current.id)
            .options(selectinload(Request.interested_user))
        )
        requests = query.scalars().all()
        return requests
    except:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error getting requests",
        )
