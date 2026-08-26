from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import resend
from dotenv import load_dotenv
import os

from database import engine, get_db, Base
from models import Booking
from schemas import BookingCreate, BookingResponse

load_dotenv()

Base.metadata.create_all(bind=engine)

resend.api_key = os.getenv("RESEND_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
        "https://bytenkay.com",
        "https://www.bytenkay.com",],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def send_confirmation_email(booking: BookingCreate):
    receiver = os.getenv("EMAIL_RECEIVER")

    # Email to client
    resend.Emails.send({
        "from": "DJ Tenkay <booking@bytenkay.com>",
        "to": [booking.email],
        "subject": "Booking Request Received — DJ Tenkay",
        "html": f"""
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F5F5F5; padding: 40px;">
                <h1 style="font-size: 32px; margin-bottom: 8px;">DJ TENKAY</h1>
                <p style="color: #888; font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">Booking Confirmation</p>
                <hr style="border-color: #1F1F1F; margin: 24px 0;"/>
                <h2 style="color: #7C3AED;">Hey {booking.name}!</h2>
                <p>Your booking request has been received. Here's a summary:</p>
                <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
                    <tr style="border-bottom: 1px solid #1F1F1F;">
                        <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Event Type</td>
                        <td style="padding: 12px 0;">{booking.event_type}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #1F1F1F;">
                        <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Event Date</td>
                        <td style="padding: 12px 0;">{booking.event_date}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Message</td>
                        <td style="padding: 12px 0;">{booking.message or 'N/A'}</td>
                    </tr>
                </table>
                <p>I'll be in touch within 24 hours to confirm availability.</p>
                <hr style="border-color: #1F1F1F; margin: 24px 0;"/>
                <p style="color: #7C3AED; font-style: italic;">You don't want 100, you want Tenkay.</p>
                <p style="color: #888; font-size: 12px;">— DJ Tenkay | djtenkay.com</p>
            </div>
        """
    })

    # Notification to DJ Tenkay
    resend.Emails.send({
        "from": "DJ Tenkay Bookings <booking@bytenkay.com>",
        "to": [receiver],
        "subject": f"New Booking Request from {booking.name}",
        "html": f"""
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F5F5F5; padding: 40px;">
                <h1 style="font-size: 32px; margin-bottom: 8px;">DJ TENKAY</h1>
                <p style="color: #888; font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">New Booking Request</p>
                <hr style="border-color: #1F1F1F; margin: 24px 0;"/>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #1F1F1F;">
                        <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Name</td>
                        <td style="padding: 12px 0;">{booking.name}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #1F1F1F;">
                        <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Email</td>
                        <td style="padding: 12px 0;">{booking.email}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #1F1F1F;">
                        <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Event Type</td>
                        <td style="padding: 12px 0;">{booking.event_type}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #1F1F1F;">
                        <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Event Date</td>
                        <td style="padding: 12px 0;">{booking.event_date}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Message</td>
                        <td style="padding: 12px 0;">{booking.message or 'N/A'}</td>
                    </tr>
                </table>
                <hr style="border-color: #1F1F1F; margin: 24px 0;"/>
                <p style="color: #888; font-size: 12px;">Reply directly to {booking.email} to respond.</p>
            </div>
        """
    })

@app.get("/")
def root():
    return {"message": "DJ Tenkay API is running"}

@app.post("/booking", response_model=BookingResponse)
def create_booking(booking: BookingCreate, db: Session = Depends(get_db)):
    try:
        db_booking = Booking(**booking.model_dump())
        db.add(db_booking)
        db.commit()
        db.refresh(db_booking)
        send_confirmation_email(booking)
        return db_booking
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/bookings")
def get_bookings(db: Session = Depends(get_db)):
    return db.query(Booking).all()