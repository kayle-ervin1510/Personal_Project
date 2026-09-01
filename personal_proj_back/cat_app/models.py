from django.db import models
from user_app.models import User



# Create your models here.

class Cat(models.Model):
    title = models.CharField(default="")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cats')

    def __str__(self):
        return f"{self.title}"

