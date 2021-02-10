from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class Users(models.Model):
    user_id = models.AutoField(max_length=255, primary_key=True)
    first_name = models.CharField("First name", max_length=255)
    last_name = models.CharField("Last name", max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address =  models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)


    def __str__(self):
        return self.first_name
class Stats(models.Model):
    user = models.OneToOneField(Users)


class Games(models.Model):
    users = models.ManyToManyField(Users,)