from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import Cat_list
from .serializers import ListCatSerializer
from rest_framework import status as s

# Create your views here.

class List(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        list_of_cats = Cat_list.objects.filter(user=request.user).order_by('id')
        serializer = ListCatSerializer(list_of_cats, many=True)

        payload = {
            "list_of_cats":serializer.data
        }

        return Response(payload, status=s.HTTP_200_OK)

class List_cat_quantity(APIView):

    authentication_clases = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def put(self, request, method, cat_id):
        list_of_cats = get_object_or_404(Cat_list, id=cat_id, user=request.user)

        if method == "add":
            list_of_cats.quantity += 1
            list_of_cats.save()
        elif method == "remove":
            if list_of_cats.quantity > 1:
                list_of_cats.quantity -= 1
                list_of_cats.save()
            else:
                list_of_cats.delete()
        return Response(status=s.HTTP_200_OK)

class Delete_cat(APIView):
    authentication = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def delete(self, request, cat_id):
        list_of_cats = get_object_or_404(Cat_list, id=cat_id, user=request.user)
        list_of_cats.delete()
        return Response(status=s.HTTP_404_NOT_FOUND)