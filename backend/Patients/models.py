from django.db import models

from Doctors.models import Doctor
from Dieases.models import Dieases

# Create your models here.
class Patient(models.Model):
    name = models.CharField(max_length=20)
    ProfilePic = models.CharField(max_length=255)
    age = models.IntegerField()
    gender = models.CharField(max_length=20)
    admitDate = models.DateField()
    diease = models.ManyToManyField(Dieases)
    doctor = models.ManyToManyField(Doctor)


    def __str__(self):
        return self.name