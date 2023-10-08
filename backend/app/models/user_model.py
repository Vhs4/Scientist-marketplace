from sqlalchemy import Integer, String, DateTime, func, ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from passlib.hash import bcrypt
from typing import List
from ..database import Base


class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    email: Mapped[str] = mapped_column(String, unique=True, nullable=False)
    hashed_password: Mapped[str] = mapped_column(String, nullable=False)
    username: Mapped[str] = mapped_column(
        String, unique=True, index=True, nullable=False
    )

    profile_picture: Mapped[str] = mapped_column(String, default="")
    profile_type: Mapped[str] = mapped_column(String, default="user")

    disponibility: Mapped[str] = mapped_column(String, default="")
    created_at: Mapped[DateTime] = mapped_column(DateTime, default=func.now())

    skills: Mapped[List["Skill"]] = relationship("Skill", back_populates="user")
    posts: Mapped[List["Post"]] = relationship("Post", back_populates="user")

    requests: Mapped[List["Request"]] = relationship(
        "Request", back_populates="interested_user"
    )

    def verify_password(self, password: str):
        return bcrypt.verify(password, self.hashed_password)




class Post(Base):
    __tablename__ = "posts"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)

    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"))
    user: Mapped["User"] = relationship("User", back_populates="posts")

    requests: Mapped[List["Request"]] = relationship("Request", back_populates="post")
    skills: Mapped[List["Skill"]] = relationship("Skill", back_populates="post")

    created_at: Mapped[DateTime] = mapped_column(DateTime, default=func.now())


class Skill(Base):
    __tablename__ = "skills"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String)

    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"))
    user: Mapped["User"] = relationship("User", back_populates="skills")

    post_id: Mapped[int] = mapped_column(Integer, ForeignKey("posts.id"))
    post: Mapped["Post"] = relationship("Post", back_populates="skills")



class Request(Base):
    __tablename__ = "requests"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)


    interested_user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"))
    interested_user: Mapped["User"] = relationship("User", back_populates="requests")

    post_id: Mapped[int] = mapped_column(Integer, ForeignKey("posts.id"))
    post: Mapped["Post"] = relationship("Post", back_populates="requests")
