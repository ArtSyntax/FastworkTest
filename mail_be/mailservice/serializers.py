from rest_framework import serializers
from mailservice.models import Mail


class MailSerializer(serializers.ModelSerializer):

    # TODO: uncomment to reformat status and timestamp but get bug if saving
    # status = serializers.SerializerMethodField()
    #
    # def get_status(self, obj):
    #     return dict(Mail.STATUS).get(obj.status)
    #
    # def to_representation(self, instance):
    #     representation = super(MailSerializer, self).to_representation(instance)
    #     representation['timestamp'] = instance.timestamp.strftime("%d %b %Y - %H:%M")
    #     return representation

    class Meta:
        model = Mail
        read_only_fields = ('id', 'status', 'timestamp')
        exclude = ('id',)