from django.urls import path
from .views import AllCats, ACat
urlpatterns =[
    path('', AllCats.as_view(), name='list'), # name='all_cats'
    path('<int:cat_id>/', ACat.as_view(), name='cat_id') # name='a_cat'
]