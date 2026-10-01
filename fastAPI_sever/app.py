from fastapi import FastAPI
app = FastAPI()
#localhost:8000/getStudents
@app.get("/getStudents")
def get_students():
    return "get students is called"
@app.post("/register")
def register(stu:Student):
    return "student registered"
@app.put("/update")
def update():
    return "update is called"


@app.get("/getStudentById/{id}")
def get_student_by_id(userid: int):
    return {"user_id":userid}

@app.get("/getstudentdetails")
def getstudentdetails(page:int=1, limit:int=10):
    return {"page":page, "limit":limit}