from fastapi import APIRouter
from models import Staff
from database import staff_collection
staff_router = APIRouter(prefix="/staff",tags=["staffs"])
#localhost:8000/staff/getStaffs
@staff_router.get("/getStaffs")
def get_staffs():
    return "get staffs method is called"
#localhost:8000/staff/addStaff
@staff_router.post("/addStaff")
def add_staff():
    return "add staffs method is called"