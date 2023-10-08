from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordRequestForm

from app.schemas import UserBase, UserUpdate, SkillBase
from app.depends import get_session_current_db, verify_token
from app.controllers.user_controller import (
    crud_login_user,
    crud_create_user,
    crud_update_user,
    crud_delete_user,
    crud_get_user,
    crud_get_users
)

user_router = APIRouter(prefix="/user")


@user_router.post("/login")
def route_login_user(
    user: OAuth2PasswordRequestForm = Depends(),
    session_db: Session = Depends(get_session_current_db),
):
    response = crud_login_user(user=user, session_db=session_db)
    return JSONResponse(content=response, status_code=status.HTTP_200_OK)



@user_router.post("/create")
def route_create_user(
    user: UserBase,
    skills: list[SkillBase],
    session_db: Session = Depends(get_session_current_db),
):
    crud_create_user(
        user=user,
        skills=skills,
        session_db=session_db,
    )
    return {"message": "User created successfully"}


@user_router.get("/get", dependencies=[Depends(verify_token)])
def route_get_user(current_user=Depends(verify_token), session_db: Session = Depends(get_session_current_db)):
    return crud_get_user(current_user, session_db)

@user_router.get("/get_all")
def route_get_users(session_db: Session = Depends(get_session_current_db)):
    return crud_get_users(session_db)


@user_router.delete("/delete", dependencies=[Depends(verify_token)])
def route_delete_user(
    password: str,
    confirm_password: str,
    current_user=Depends(verify_token),
    session_db: Session = Depends(get_session_current_db),
):
    

    if password != confirm_password:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Passwords do not match"
        )
    crud_delete_user(current_user, password, session_db)
    return {"message": "User deleted successfully"}


@user_router.put("/uptade/", dependencies=[Depends(verify_token)])
def route_update_user(
    password_confirmation: str,
    update_user: UserUpdate,
    current_user=Depends(verify_token),
    session_db: Session = Depends(get_session_current_db),
):
    crud_update_user(password_confirmation, current_user, update_user, session_db)
    return {"message": "User updated successfully"}
