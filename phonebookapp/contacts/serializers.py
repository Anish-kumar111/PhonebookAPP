from rest_framework import routers, serializers, viewsets
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields='__all__'