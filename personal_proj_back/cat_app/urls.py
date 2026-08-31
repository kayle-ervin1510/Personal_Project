from django.urls import path
from .views import List, ACat
urlpatterns =[
    path('', List.as_view(), name='list'),
    path('<int:cat_id>/', ACat.as_view(), name='cat_id')
]