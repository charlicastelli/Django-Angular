from rest_framework import viewsets
from .models import Member
from .serializers import MemberSerializers, MemberSimpleSerializers
from rest_framework.response import Response
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializers
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    #Exibir na tela do angular somente o id e o nome
    def list(self, request, *args, **kwargs):
        queryset = Member.objects.all()
        serializer = MemberSimpleSerializers(queryset, many=True)
        return Response(serializer.data)
    


