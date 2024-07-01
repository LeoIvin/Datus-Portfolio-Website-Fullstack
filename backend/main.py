from fastapi import FastAPI
from routers import admin, users


app = FastAPI()

app.include_router(users.router, prefix="/api", tags=['User Endpoints'])
app.include_router(admin.router, prefix="/api", tags=["Admin Endpoints"])