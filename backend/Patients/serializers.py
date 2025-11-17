from rest_framework.serializers import ModelSerializer
from .models import Patient
from Doctors.serializers import DoctorSerializer
from Dieases.serializers import DieasesSerializer

class PatientSerializer(ModelSerializer):
    doctor = DoctorSerializer(many=True)
    diease = DieasesSerializer(many=True)
    class Meta:
        model = Patient
        fields = '__all__'