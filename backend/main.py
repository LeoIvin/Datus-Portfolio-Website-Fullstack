from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from routers import admin, users


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, prefix="/api", tags=['User Endpoints'])
app.include_router(admin.router, prefix="/api", tags=["Admin Endpoints"])

@app.get("/")
async def get_root():
    return RedirectResponse(url="/docs")

