from django.db import models
# from django.contrib.auth.models import User

# Create your models here.
class Contact(models.Model):
     firstname = models.CharField(max_length=121)
     lastname = models.CharField(max_length=121)
     number = models.CharField(max_length=121)
     
    #  date = models.DateField(null=True)
 
     def __str__(self):
      return self.title


 