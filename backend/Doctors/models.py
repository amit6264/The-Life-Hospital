from django.db import models

# Create your models here.
class Doctor(models.Model):
    name = models.CharField(max_length=20)
    ProfilePic = models.CharField(max_length=255)
    age = models.IntegerField()
    gender = models.CharField(max_length=20)
    speciality = models.CharField(max_length=20)
    experience = models.IntegerField()
    def __str__(self):
        return self.name