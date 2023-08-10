from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/") 
def root():
    return {"message": "Hello World"}

class Student(BaseModel):
   prompt: str

@app.post("/students/") 
def student_data(student: Student):
   return student