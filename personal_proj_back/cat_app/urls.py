from django.urls import path
from .views import List, ACat
urlspatterns =[
    path('', List.as_view()),
    '<int:cat_id>/', ACat.as_view()
]