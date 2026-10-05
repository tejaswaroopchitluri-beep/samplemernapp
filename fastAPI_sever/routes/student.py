from fastapi import APIRouter
from models import Student
from database import student_collection
from bson import ObjectId
#convert mongodb data to json format
def student_details(Student):
    return{
        "id":str(Student["_id"]),
        "name":Student["name"],
        "email":Student["email"],
        "age":Student["age"],
        "mark":Student["mark"]
    }
stu_router = APIRouter(prefix="/Students",tags=["Students"])
#localhost:8000/Students/getStudents
@stu_router.get("/getStudents")
def getStudents():
    students = student_collection.find()
    return [student_details(student) for student in students]
@stu_router.post("/register")
def register(stu:Student):
    result=student_collection.insert_one(stu.model_dump())
    return{"message":"data inserted successfully"}

@stu_router.get("/getParticularstudent/{stuid}")
def getParticularstudent(stuid:str):
    student=student_collection.find_one({"_id":ObjectId(stuid)})
    return student_details(student)
@stu_router.delete("/deletestudent/{stuid}")
def deletestudent(stuid:str):
    result=student_collection.delete_one({"_id":ObjectId(stuid)})
    return "student deleted success"
@stu_router.put("/updatestudent/{stuid}")
def updatestudent(stuid:str,stu:Student):
    result=student_collection.update_one(
        {"_id":ObjectId(stuid)},
        {"$set":stu.model_dump()}
    )
    return "student update success"
    