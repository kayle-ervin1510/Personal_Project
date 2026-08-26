from django.urls import path
from .views import CreateUser, Login, Logout, Info, RefreshView

urlpatterns = [
    path('', Info.as_view()),
    path('create/', CreateUser.as_view()), # name='create'
    path('login/', Login.as_view()), # name='login'
    path('logout/', Logout.as_view()), # name='logout'
  path('refresh/', RefreshView.as_view()) # name='refresh'
]