from django.core.exceptions import ValidationError
import re

def validate_user_email(value):
    if not re.fullmatch(r'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$', value):
        raise ValidationError(
            message = "Invalid email",
            params = {"value" : value}
        )

#This regex checks that the email is correctly worded/spelled  in email format.