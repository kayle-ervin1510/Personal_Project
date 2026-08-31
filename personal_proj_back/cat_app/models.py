from django.db import models
from user_app.models import User



# Create your models here.

class Cat(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cats')

    def __str__(self):
        return f"{self.user.email}'s List"

# class List_Cat(models.Model):
#     cat = models.ForeignKey(Cat, on_delte=models.CASCADE, realted_name='list_cats')
#     # list = models.ForeignKey(List, on_delte=models.CASCADE, related_name='cats')
#     user = models.ForeignKey(User, on_delte=models.CASCADE, related_name='list_cats')
#     amount = models.PositiveIntegerField(default=0)

#     def __str__(self):
#         return f"{self.amount}"