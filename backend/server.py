from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import httpx
import json


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    organization: Optional[str] = None
    message: str
    inquiry_type: str  # "parent", "educator", "institution", "general"

class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    organization: Optional[str] = None
    message: str
    inquiry_type: str

class GameTracker(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    school_name: Optional[str] = None
    state: Optional[str] = None
    games_played: int = 0
    students_engaged: int = 0
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class GameTrackerCreate(BaseModel):
    school_name: Optional[str] = None
    state: Optional[str] = None
    games_played: int = 0
    students_engaged: int = 0

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "DAMAT API - Malaysia's First Arithmetic Board Game"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact")
async def submit_contact_form(contact_data: ContactFormCreate):
    """
    Submit contact form and optionally integrate with Google Sheets
    For now, we'll store in database and log the submission
    """
    try:
        # Create contact object with timestamp
        contact_dict = contact_data.dict()
        contact_obj = ContactForm(**contact_dict)
        
        # Store in database
        result = await db.contact_forms.insert_one(contact_obj.dict())
        
        # Log the submission
        logger.info(f"Contact form submitted: {contact_obj.name} - {contact_obj.email}")
        
        # TODO: Add Google Sheets integration here
        # For now, we'll return success
        
        return {
            "success": True, 
            "message": "Contact form submitted successfully! We'll get back to you soon.",
            "id": str(result.inserted_id)
        }
        
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contact", response_model=List[ContactForm])
async def get_contact_forms():
    """Get all contact form submissions (admin use)"""
    try:
        contact_forms = await db.contact_forms.find().to_list(1000)
        return [ContactForm(**form) for form in contact_forms]
    except Exception as e:
        logger.error(f"Error fetching contact forms: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact forms")

@api_router.post("/game-tracker", response_model=GameTracker)
async def add_game_tracker_data(tracker_data: GameTrackerCreate):
    """Add game tracking data for the dashboard"""
    try:
        tracker_dict = tracker_data.dict()
        tracker_obj = GameTracker(**tracker_dict)
        
        result = await db.game_tracker.insert_one(tracker_obj.dict())
        
        return tracker_obj
        
    except Exception as e:
        logger.error(f"Error adding game tracker data: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to add game tracker data")

@api_router.get("/game-tracker", response_model=List[GameTracker])
async def get_game_tracker_data():
    """Get game tracking data for dashboard"""
    try:
        tracker_data = await db.game_tracker.find().to_list(1000)
        return [GameTracker(**data) for data in tracker_data]
    except Exception as e:
        logger.error(f"Error fetching game tracker data: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch game tracker data")

@api_router.get("/game-tracker/stats")
async def get_game_tracker_stats():
    """Get aggregated statistics for the game tracker dashboard"""
    try:
        # Get all tracker data
        tracker_data = await db.game_tracker.find().to_list(1000)
        
        # Calculate statistics
        total_games = sum(data.get('games_played', 0) for data in tracker_data)
        total_students = sum(data.get('students_engaged', 0) for data in tracker_data)
        total_schools = len(set(data.get('school_name', '') for data in tracker_data if data.get('school_name')))
        
        # Get states
        states = list(set(data.get('state', '') for data in tracker_data if data.get('state')))
        
        return {
            "total_games_played": total_games,
            "total_students_engaged": total_students,
            "total_schools": total_schools,
            "states_reached": len(states),
            "states_list": states,
            "last_updated": datetime.utcnow().isoformat()
        }
        
    except Exception as e:
        logger.error(f"Error fetching game tracker stats: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch game tracker statistics")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()