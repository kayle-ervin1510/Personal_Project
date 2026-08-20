from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import login, authenticate, logout
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status as s
from .models import User

# from django.conf import settings
# from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework_simplejwt.exceptions import TokenError
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from rest_framework_simplejwt.settings import api_settings



# ACESS_MAX_AGE = int(settings.SIMPLE_JWT["ACCESS_TOKEN_LIFETIME"].total_seconds())
# REFRESH_MAX_AGE = int(settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"].total_seconds())
# REFRESH_COOKIE_PATH = "/api/v1/users/"

# def set_auth_cookies(response, access=None, refresh=None):
#   common = {
#   "httponly":True,
#   "secure": settings.AUTH_COOKIE_SECURE,
#   "samesite":settings.AUTH_COOKIE_SAMESITE
# }
# if access:
#   response.set_cookie("access", access, max_age=ACCESS_MAX_AGE, path="/", **common)
# if refresh:
#   response.set_cookie("refresh", refresh, max_age=REFRESH_MAX_AGE, path=REFRESH_COOKIE_PATH, **common)
# return response

# def clear_auth_cookies(response):
# response.delete_cookie("access", path="/")
# response.delete_cookie("refresh", path=REFRESH_COOKIE_PATH)
# return response

# def token_for(user):
#   refresh = RefreshToken.for_user(user)
#   return str(refresh.access_token), str(refresh)

# class JWTCookieAuthentication(JWTAuthentication):
#   def authenticate(self, request):
#       raw_token = request.COOKIES.get("access")
#   if raw_token is None:
#       return None
# validated_token = self.get_validated_token(raw_token)
# return self.get_user(validated_token), validated_token




# COOKIE_MAX_AGE = 60 * 60 * 7

# def set_token_cookie(response, token_key):
#     response.set_cookie(
#         key="token",
#         value=token_key,
#         httponly=True,
#         secure=settings.AUTH_COOKIE_SECURE,
#         samesite=settings.AUTH_COOKIE_SAMESITE,
#         max_age=COOKIE_MAX_AGE,
#         path="/"
#     )
#     return response

# class CookieAuthentication(TokenAuthentication):
#     def authentication(self, request):
#         token_key = request.COOKIES.get("token")
#         if not token_key:
#             return None
#         return self.authenticate_credentials(token_key)



class CreateUser(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        data = request.data.copy()
        data['username'] = data.get('email')
        # data['username'] = request.data.get('email')
        try:
            # when I have **data, I can create an account, but I can't login.
            new_user = User.objects.create_user(**data)
            # keep eye on **data
            new_user.full_clean()
            new_user.save()
            # acess, refresh = tokens_for(new_user_)
            token = Token.objects.create(user=new_user)
            return Response({"token":token.key, "email":new_user.email}, status=s.HTTP_201_CREATED)
            # response = Response({"email":new_user.email}, status=s.HTTP_201_CREATED)
            # return set_token_cookie(response, token.key)
        except Exception as e:
            return Response(e.args, status=s.HTTP_400_BAD_REQUEST)
        # On firefox, trying to create an account, I got a 400 bad request, saying user could not be null
        # When it came to creating a note, that is

class Login(APIView):
    authentication_classes = []
    permission_classes = []
# can't sign in with exisitng credentials
# Can create new credentials, but not with existing user data

    def post(self, request):
        data = request.data.copy()
        # originally data = request.data
        # can make a new account with data = request.data.copy()
        data['username'] = data.get('email')
        # originally data['username'] = request.data.get('email')
        # can make a new account with data.get('email')
        user = authenticate(username=data.get('username'), password=data.get("password"))
        if user:

            # token, _= Token.objects.get_or_create(user=user)
            # response = Response({"email":user.email})

            Token.objects.get_or_create(user=user)
            return Response({"token":user.auth_token.key, "email":user.email})
        
            #return set_token_cookie(response, token.key)

            # acess, refresh = tokens_for(user)
            # response = Response({"email":user.email})
            # return set_auth_cookies(response, access, refresh)
        
        else:
            return Response("A user matching that value does not exist.", status=s.HTTP_404_NOT_FOUND)


# class RefreshView(APIView):
#     authentication_classes = []
#     permission_classes = []
#     def post(self, request):
#         raw_refresh=request.COOKIES.get("refresh")
#         if not raw_refresh:
#             return Response({"detail":"No refresh token available"}, status=s.HTTP_401_UNAUTHORIZED)
#         try:
#             refresh = RefreshToken(raw_refresh)
#         except TokenError:
#             return clear_auth_cookies(
#                 Reponse({"detail":"Invalid or expired refresh token."},
#                         status=s.HTTP_401_UNAUTHORIZED)
#                 )
#         acess = str(refresh.access_token)

#         new_refresh = None

#         if api_settings.ROTATE_REFRESH_TOKENS:
#             if api_settings.BLACKLIST_AFTER_ROTATION:
#                 try:
#                     refresh.blacklist()
#                 except AttributeError:
#                     pass

#             refresh.set_jti()
#             refresh.set_exp()
#             refresh.set_iat()
#             new_refresh = str(refresh)
#         response = Response({"refreshed":True})
#         return set_auth_cookies(response, access, new_refresh)


class UserView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    # authentication_classes = [CookieAuthentication]
    # permission_classes = [IsAuthenticated]

    # authentication_classes = [JWTCookieAuthentication]
    # permission_classes = [IsAuthenticated]

class Info(UserView):
    
    def get(self, request):
        user = request.user
        return Response({"token":user.auth_token.key, "email":user.email})

        # return Response({"email":user.email})

class Logout(UserView):
    def post(self, request):
        user = request.user
        user.auth_token.delete()
        return Response(f"{user.email} has been logged out.")

        # response = Response({"detail":"logged out"})
        # response.delete_cookie("token", path="/")
        # return response

        # raw_refresh = request.COOKIES.get("refresh")
        # if raw_refresh:
        #   try:
        #       RefreshToken(raw_refresh).blacklist()
        #   except TokenError:
        #       pass
        # return clear_aruth_cookies(Response({"detail":"logged out"}))


## When trying to create a user on port 8000 ##

# I get the following error:
# POST /api/v1/users/create/
# HTTP 400 Bad Request
# Allow: POST, OPTIONS
# Content-Type: application/json
# Vary: Accept
# [ "User() got unexpected keyword arguments:
#  '_content_type",'_content'" ]

# When I submit the username, email, and password as a dictionary
# Then I receive this response:
# POST /api/v1/users/create/
# HTTP 400 Bad Request
# Allow: POST, OPTIONS
# Content-Type: application/json
# Vary: Accept
# [ "value too long for type character varrying(150)"]

# When I try to send in an email and password, no username now
# I get this error:
# POST /api/v1/users/create/
# HTTP 400 Bad Request
# Allow: POST, OPTIONS
# Content-Type: application/json
# Vary: Accept

# [
#     "duplicate key value violates unique constraint \"user_app_user_email_key\"\nDETAIL:  Key (email)=() already exists."
# ]