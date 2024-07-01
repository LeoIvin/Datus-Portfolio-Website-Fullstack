def serializer(form) -> dict:
    return {
        "id": str(form["_id"]),
        "fullName": form["fullName"],
        "phoneNumber": form["phoneNumber"],
        "email": form["email"],
        "message": form["message"]
    }

def list_serial(forms) -> list:
    return[serializer(form) for form in forms]
    