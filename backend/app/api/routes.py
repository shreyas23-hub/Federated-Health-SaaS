from fastapi import APIRouter, Depends, HTTPException
from starlette.status import HTTP_401_UNAUTHORIZED
from ..core.security import create_access_token
api_router = APIRouter()
@api_router.post("/login")
async def login(username: str, password: str):
    # Dummy user for demo
    if username == "admin" and password == "password":
        access_token = create_access_token({"sub": username})
        return {"access_token": access_token, "token_type": "bearer"}
    raise HTTPException(
        status_code=HTTP_401_UNAUTHORIZED,
        detail="Incorrect username or password"
    )
@api_router.get("/health")
async def health():
    return {"status": "ok"}