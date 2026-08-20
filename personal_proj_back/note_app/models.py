from django.db import models
from user_app2.models import AppUser

# Create your models here.

class Note(models.Model):
    title = models.CharField()
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='notes')
    # content = models.TextField(default="", blank=True)
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return f"{self.title}"