from django.shortcuts import render
from user_app.views import UserView
from rest_framework.response import Response
from rest_framework import status as s
from .models import Cat


# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated
from .serializer import CatSerializer
# Create your views here.

class AllCats(UserView):


    def get(self, request):
        return Response(CatSerializer(request.user.cats.all(), many=True).data)
        # cat = Cat.objects.all().order_by("id")
        # ser_cat = CatSerializer(cat, many=True)
        # return Response(ser_cat.data)

    def post(self, request):
        # data = request.data
        data = request.data.copy()
        data['user'] = request.user.id
        ser_cat = CatSerializer(data=data)
        if ser_cat.is_valid():
            ser_cat.save()
            return Response(ser_cat.data, status=s.HTTP_200_OK)
        else:
            return Response(ser_cat.errors, status=s.HTTP_400_BAD_REQUEST)

class ACat(UserView):

    def get (self, request, cat_id):
        return Response(CatSerializer(request.user.cats.get(id=cat_id)).data)

    def put(self, request, cat_id):
        data = request.data.copy()
        ser_cat = CatSerializer(request.user.cats.get(id=cat_id), data=data, partial=True)
        if ser_cat.is_valid():
            ser_cat.save()
            return Response(ser_cat.data)
        else:
            return Response(ser_cat.errors, status=s.HTTP_400_BAD_REQUEST)

    def delete(self, request, cat_id):
        cat = request.user.cats.get(id=cat_id)
        return_string = f"{cat_id} has been deleted."
        cat.delete()
        return Response(return_string)