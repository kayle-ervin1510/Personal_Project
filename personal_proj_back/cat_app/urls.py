from django.urls import path
from .views import AllCats, ACat
urlpatterns =[
    path('', AllCats.as_view(), name='list'),
    path('<int:cat_id>/', ACat.as_view(), name='cat_id')
]