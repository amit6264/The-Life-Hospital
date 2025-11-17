from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DoctorSerializer
from .models import Doctor

@api_view(['GET'])
def allDoctors(request):
    doctors = Doctor.objects.all()
    serializer = DoctorSerializer(doctors, many=True)
    return Response(serializer.data)

@api_view(["PUT"])
def update_Doctor(request,id):
    doctors = Doctor.objects.get(id=id)
    serializer = DoctorSerializer(doctors,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['DELETE'])
def delete_Doctor(request, id):
    doctor = Doctor.objects.get(id=id)
    doctor.delete()
    return Response("Doctor deleted")