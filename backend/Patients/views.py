from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import PatientSerializer
from .models import Patient

@api_view(['GET'])
def allPatients(request):
    patients = Patient.objects.all()
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def update_Patient(request, id):
    patient = Patient.objects.get(id=id)
    serializer = PatientSerializer(patient, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@api_view(['DELETE'])
def delete_Patient(request, id):
    patient = Patient.objects.get(id=id)
    patient.delete()
    return Response("Patient deleted")
