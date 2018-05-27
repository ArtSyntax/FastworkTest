# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings
from rest_framework.response import Response
from rest_framework import generics
from mailservice.models import *
from mailservice.serializers import MailSerializer
from rest_framework import status
from sparkpost import SparkPost
import requests as rq
import sys

class MailList(generics.ListCreateAPIView):
    queryset = Mail.objects.all()
    serializer_class = MailSerializer

    def sendEmailSparkpost(self, data):
        # sp = SparkPost('4d2dadd776d98dfbf4329831f2a68c49eddbd707')
        api_key = getattr(settings, "SPARKPOST_API_KEY", None)

        try:
            sp = SparkPost(api_key)
            sp.transmissions.send(
                use_sandbox=True,
                recipients=[data["to_mail"]],
                html=data["text"],
                from_email='fastworktest@sparkpostbox.com',
                subject=data["subject"]
            )
            return True
        except Exception as e:
            print(e)
            return False

    def sendEmailMailgun(self, data):
        try:
            api_key = getattr(settings, "MAILGUN_API_KEY", None)
            domain = getattr(settings, "MAILGUN_DOMAIN", None)

            rq.post(
                ("https://api.mailgun.net/v3/" + domain + "/messages"),
                auth=("api", api_key),
                data={"from": "fastworktest@" + domain,
                      "to": [data["to_mail"]],
                      "subject": data["subject"],
                      "text": data["text"]})
            return True
        except Exception as e:
            print(e)
            return False

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

