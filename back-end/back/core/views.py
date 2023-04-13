from rest_framework import viewsets
from .models import Member
from .serializers import MemberSerializers, MemberSimpleSerializers
from rest_framework.response import Response

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializers

    #Exibir na tela do angular somente o id e o nome
    def list(self, request, *args, **kwargs):
        queryset = Member.objects.all()
        serializer = MemberSimpleSerializers(queryset, many=True)
        return Response(serializer.data)
    


