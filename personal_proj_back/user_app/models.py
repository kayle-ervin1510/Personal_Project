from django.db import models
from django.contrib.auth.models import AbstractUser
# from django.core import validators as val
# from .validators import validate_user_email

# Create your models here.

class User(AbstractUser):

    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    # email: str = models.EmailField(
    #     max_length = 100,
    #     default = None,
    #     null = False,
    #     blank = False,
    #     unique = True,
    #     validators = [
    #         validate_user_email
    #     ]
    # )

    # password: str = models.EmailField(
    #     default = None,
    #     blank = False,
    #     null = False,
    #     unique = True,
    #     validators = [
    #         val.MinValueValidator(5, "Ensure password is at least 5 characters long. Try again."),
    #         val.MaxValueValidator(200, "Password cannot be longer than 200 characters. Try again.")
    #     ]
    # )