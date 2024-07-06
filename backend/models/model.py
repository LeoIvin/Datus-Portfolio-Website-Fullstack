from pydantic import BaseModel, validator

class Forms(BaseModel):
    fullName: str
    phoneNumber: str | None = None
    email: str
    message: str