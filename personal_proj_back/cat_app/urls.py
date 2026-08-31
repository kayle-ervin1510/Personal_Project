from django.urls import path
from .views import AllCats, ACat
urlspatterns =[
    path('', AllCats.as_view()),
    '<int:cat_id>/', ACat.as_view()
]