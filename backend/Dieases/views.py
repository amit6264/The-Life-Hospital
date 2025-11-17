from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import DieasesSerializer
from .models import Dieases

@api_view(['GET'])
def allDieases(request):
    dieases = Dieases.objects.all()
    serializer = DieasesSerializer(dieases, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def update_Dieases(request, id):
    dieases = Dieases.objects.get(id=id)
    serializer = DieasesSerializer(dieases, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@api_view(['DELETE'])
def delete_Dieases(request, id):
    dieases = Dieases.objects.get(id=id)
    dieases.delete()
    return Response("Dieases deleted")
