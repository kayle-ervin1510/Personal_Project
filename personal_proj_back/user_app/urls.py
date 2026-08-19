from django.urls import path
from .views import SignUp, Login, Logout, Info #, RefreshView

urlpatterns = [
    path('', Info.as_view()),
    path('signup/', SignUp.as_view()), # name='signup'
    path('login/', Login.as_view()), # name='login'
    path('logout/', Logout.as_view()), # name='logout'
#   path('refresh/', RefreshView.as_view()) 
]