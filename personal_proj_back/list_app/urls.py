from django.urls import path
from .views import List, List_cat_quantity, Delete_cat

urlpatterns =[
    path('', List.as_view(), name='list'),
    path('<str:method>/<int:list_of_cats_id>/', List_cat_quantity.as_view(), name='list_cat_amount'),
    path('<int:list_of_cats_id>/', Delete_cat.as_view(), name='delete_cat')
]