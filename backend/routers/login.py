from fastapi import APIRouter

router = APIRouter(prefix="/login", tags=["Login"])

@router.get("/")
def get_login_status():
    return {"status": "login is working"}