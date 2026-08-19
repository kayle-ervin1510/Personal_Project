from django.db import models
from django.contrib.auth.models import AbstractUser
# from django.core import validators as val
# from .validators import validate_user_email

# Create your models here.
# refactor the username to equal email
class User(AbstractUser):

    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
