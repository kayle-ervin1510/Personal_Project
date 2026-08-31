from rest_framework.serializers import ModelSerializer
from .models import Cat_list
from cat_app.serializer import CatSerializer

class ListCatSerializer(ModelSerializer):
    cat = CatSerializer()

    class Meta:
        model = Cat_list
        fields = ['id', 'cat']