from fastapi import APIRouter, HTTPException
from config.database import db, collection
from models.model import Forms
from serializers.serializer import serializer, list_serial
from bson import ObjectId 
from pydantic import BaseModel


router = APIRouter()

@router.get("/forms")
async def get_forms():
    forms = list_serial(collection.find())
    return forms


@router.get("forms/{form_id}")
async def get_form_by_id(id: str):
    form = collection.find_one({"_id": ObjectId(id)})
    if form:
         return serializer(form)
    else:
        return HTTPException(status_code=404, detail="Form not found")

@router.get("/forms/{fullName}")
async def get_form_by_name(fullName: str):
     form = collection.find_one({"fullName": {"$regex": fullName, "$options": "i"}}) # make field case insensitive
     if form:
         return serializer(form)
     else:
         return HTTPException(status_code=404, detail="Form not found")
     

@router.post("/post-forms")
async def post_form(form: Forms):
    try:
        collection.insert_one(dict(form))
        return {"message": "Form submitted successfully"}
    except Exception as e:
        return HTTPException(status_code=400, detail="Form could not be posted")
    




