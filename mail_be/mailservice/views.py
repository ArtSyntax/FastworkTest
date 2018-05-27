# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from mailservice.models import *
from mailservice.serializers import MailSerializer
from mailservice.services import MailServiceMixin

class MailList(generics.ListCreateAPIView, MailServiceMixin):
    queryset = Mail.objects.all()
    serializer_class = MailSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # self.perform_create(serializer)

        # success = self.sendEmailSparkpost(serializer.data)
        success = self.sendEmailMailgun(serializer.data)

        if success:
            headers = self.get_success_headers(serializer.data)
            return Response({"message": "Successful sent email to " + serializer.data["to_mail"]}, status=status.HTTP_200_OK, headers=headers)
        else:
            headers = self.get_success_headers(serializer.data)
            return Response({"message": "Fail sent email to " + serializer.data["to_mail"]}, status=status.HTTP_424_FAILED_DEPENDENCY, headers=headers)


class MailDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mail.objects.all()
    serializer_class = MailSerializer

