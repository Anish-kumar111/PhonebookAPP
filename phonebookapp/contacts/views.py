
from random import random
from django.shortcuts import render

from contacts.models import Contact

from rest_framework import routers, serializers, viewsets , status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ContactSerializer

# Create your views here.
class ContactViewSet(viewsets.ViewSet):
    def list(self, request): #api list
        contacts =  Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        # publish()
        return Response(serializer.data)
        # pass



    def create(self, request): #api post
        serializer = ContactSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response(serializer.data,status=status.HTTP_201_CREATED)
        # pass



    def retrieve(self, request, pk=None): #api get
        contact = Contact.objects.get(id=pk)
        serializer= ContactSerializer(contact)
        return Response(serializer.data)



        # pass



    def update(self, request, pk=None): #api put
        contact = Contact.objects.get(id=pk)
        serializer= ContactSerializer(instance=contact, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
       
        return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        

        # pass



    def destroy(self, request,pk=None): #api delete
        contact = Contact.objects.get(id=pk)
        contact.delete()
       
        return Response(status=status.HTTP_204_NO_CONTENT)

        # pass

