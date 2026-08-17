from django.urls import path
from .views import SignUp, Login, Logout, Info

urlpatterns = [
    path('', Info.as_view()),
    path('signup/', SignUp.as_view()), # name='create'
    path('login/', Login.as_view()), # name='login'
    path('logout/', Logout.as_view()) # name='logout'
]