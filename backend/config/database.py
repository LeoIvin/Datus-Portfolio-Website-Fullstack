from pymongo import MongoClient

client = MongoClient("mongodb+srv://leoivin0:1hiOnEyMNuOMkJjh@cluster0.xlgvnhc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

db = client.PortfolioDB

collection = db['Forms']