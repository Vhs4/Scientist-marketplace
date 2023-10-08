from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session, selectinload
from sqlalchemy import select, insert

from app.schemas import PostCreate, Post, SkillBase

from app.models.user_model import User, Post, Request, SkillPost, SkillUser
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
    db_post = Post(
        title=post.title,
        content=post.content,
        user_id=user_current.id,
    )
    session_db.add(db_post)
    session_db.commit()
    for skill in skills:
        session_db.add(
            SkillPost(
                post_id=db_post.id,
                name=skill.name,
            )
        )
    session_db.commit()
    return {"message": "Post created successfully"}


@post_router.get("/get_my_posts", status_code=status.HTTP_200_OK)
def get_my_posts(
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
            select(Post)
            .where(Post.user_id == user_current.id)
            .options(selectinload(Post.skills))
        )
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
        session_db.add(
            Request(
                post_id=post_id,
                interested_user_id=user_current.id,
            )
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


@post_router.get("/get_posts_by_skill", status_code=status.HTTP_200_OK)
def get_posts_by_skill(
    user_current: User = Depends(verify_token),
    session_db: Session = Depends(get_session_current_db),
):
    if not user_current:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not authenticated or token invalid",
        )

    skills_query = session_db.execute(
        select(SkillUser).where(SkillUser.user_id == user_current.id)
    )
    skills = skills_query.scalars().all()
    query = session_db.execute(
        select(Post, SkillPost)
        .join(SkillPost)
        .where(
            user_current.id != Post.user_id and
            SkillPost.name.in_([skill.name for skill in skills])
        )
        .options(selectinload(Post.skills))
    )

    posts = query.scalars().all()
    return posts


@post_router.get("/get_all_posts", status_code=status.HTTP_200_OK)
def get_posts_by_skill(
    offset: int = 0,
    limit: int = 10,
    session_db: Session = Depends(get_session_current_db),
):
    query = session_db.execute(
        select(Post)
        .join(User)
        .options(selectinload(Post.skills))
        .offset(offset)
        .limit(limit)
    )

    posts = query.scalars().all()

    next_url = (
        f"/user/ports/get_all_posts?offset={offset + limit}&limit={limit}"
        if len(posts) == limit
        else None
    )

    return {
        "next_url": next_url,
        "posts": posts,
    }
