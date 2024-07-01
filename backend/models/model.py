from pydantic import BaseModel, validator

class Forms(BaseModel):
    fullName: str
    phoneNumber: str | None = None
    email: str
    message: str

    @validator('fullName', pre=True)
    def convert_to_lower(cls, v):
        return v.lower() if v else v