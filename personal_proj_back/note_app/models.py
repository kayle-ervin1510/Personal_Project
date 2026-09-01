from django.db import models
from user_app.models import User

# Create your models here.

class Note(models.Model):
    title = models.CharField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes')

    

    def __str__(self):
        return f"{self.title}"