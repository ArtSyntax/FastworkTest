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

    def __saveLog(self, data, status):
        data["status"] = "S" if status else "F"
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return serializer

    def get_queryset(self):
        to_mail = self.request.query_params.get('to_mail', None)
        from_mail = self.request.query_params.get('from_mail', None)
        subject = self.request.query_params.get('subject', None)

        queryset = Mail.objects.all()
        if to_mail is not None:
            queryset = queryset.filter(to_mail=to_mail)
        if from_mail is not None:
            queryset = queryset.filter(from_mail=from_mail)
        if subject is not None:
            queryset = queryset.filter(subject__contains=subject)
        return queryset

    def post(self, request, *args, **kwargs):

        # validate request data
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # send email
        isSuccess = self.sendEmail(serializer.data)

        # save log
        serializer = self.__saveLog(request.data, isSuccess)

        # return response
        headers = self.get_success_headers(serializer.data)
        if isSuccess:
            return Response({"message": "Successful sent email to " + serializer.data["to_mail"]}, status=status.HTTP_200_OK, headers=headers)
        else:
            return Response({"message": "Fail sent email to " + serializer.data["to_mail"]}, status=status.HTTP_424_FAILED_DEPENDENCY, headers=headers)


# Unused api
# class MailDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Mail.objects.all()
#     serializer_class = MailSerializer

