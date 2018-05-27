from rest_framework import serializers
from mailservice.models import Mail

class MailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mail
        fields = '__all__'