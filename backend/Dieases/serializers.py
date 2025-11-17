from rest_framework.serializers import ModelSerializer
from .models import Dieases

from Doctors.serializers import DoctorSerializer

class DieasesSerializer(ModelSerializer):
    doctors = DoctorSerializer(many=True)
    class Meta:
        model = Dieases
        fields = "__all__"

        