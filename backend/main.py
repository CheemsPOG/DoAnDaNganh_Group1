from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routers import fan, light, sensor
from contextlib import asynccontextmanager
from adafruitConnection import run_mqtt_thread

@asynccontextmanager
async def lifespan(app: FastAPI):
    run_mqtt_thread()
    yield
    

# Initialize FastAPI app
app = FastAPI(lifespan= lifespan)

# Middleware for CORS
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.56.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    # allow_origins=origins,
    allow_origins = ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(fan.router)
app.include_router(light.router)
app.include_router(sensor.router)

@app.get("/")
async def root():
    """
    Root endpoint to check API status.
    """
    return { "Hello World" }
    

# ✅ Start FastAPI
if __name__ == "__main__":
    # Start FastAPI with Uvicorn
    # Main thread sẽ đc dùng để host API server, nơi frontend get data từ backend
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=False)
