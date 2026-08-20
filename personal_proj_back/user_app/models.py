from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
# refactor the username to equal email - thought I did that already?
class User(AbstractUser):

    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

# I'm receiving the error, "value type too long for character(150)"