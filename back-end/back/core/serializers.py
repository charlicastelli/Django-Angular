from rest_framework import serializers
from .models import Member

class MemberSerializers(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'name', 'surname', 'phone', 'email', 'photo']

class MemberSimpleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'name']