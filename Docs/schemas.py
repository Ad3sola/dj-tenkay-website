from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class BookingCreate(BaseModel):
    name: str
    email: EmailStr
    event_type: str
    event_date: str
    message: Optional[str] = None

class BookingResponse(BaseModel):
    id: int
    name: str
    email: str
    event_type: str
    event_date: str
    message: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True