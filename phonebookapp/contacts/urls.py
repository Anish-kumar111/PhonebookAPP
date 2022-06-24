from django.urls import path
from .views import ContactViewSet

urlpatterns = [
    path('contacts', ContactViewSet.as_view({

        'get':'list',
        'post':'create'
        

    })),

    path('contacts/<str:pk>', ContactViewSet.as_view({

        'get':'retrieve',
        'put':'update',
        'delete':'destroy'

    })),
  
    
    
    
    ]