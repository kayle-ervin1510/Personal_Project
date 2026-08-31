from django.db import models
from user_app.models import User
from cat_app.models import Cat
# Create your models here.

class List(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='cat')

    def __str__(self):
        return f"{self.user.email}'s List"

class Cat_list(models.Model):
    cat = models.ForeignKey(Cat, on_delete=models.CASCADE, related_name='list_of_cats')
    list = models.ForeignKey(List, on_delete=models.CASCADE, related_name='cats')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='list_of_cats')
    quantity = models.PositiveIntegerField(default=1)