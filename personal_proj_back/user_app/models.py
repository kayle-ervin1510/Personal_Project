from django.db import models
from django.contrib.auth.models import AbstractUser
from .validators import validate_user_email
from django.core import validators as val

# refactor the username to equal email - thought I did that already?

class User(AbstractUser):

    # email = models.EmailField(
    #     unique=True, max_length=200,
    #     default = None,
    #     null = False,
    #     blank = False,
    #     validators = [
    #         validate_user_email
    #     ]
    # )

    # password = models.EmailField(
    #     default=None,
    #     blank = False,
    #     null = False,
    #     unique = True,
    #     validators = [
    #         val.MinValueValidator(2, "Password must be greater than or equal to 2 characters."),
    #         val.MaxValueValidator(200, "Password must be less than or equal to 200 characters.")
    #     ]
    # )
    username = None
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return self.email
# I'm receiving the error, "value type too long for character(150)"
# Even after adding in the max_lenght, I'm still getting the above error