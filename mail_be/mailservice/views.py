# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from mailservice.models import *
from mailservice.serializers import MailSerializer

class MailList(generics.ListCreateAPIView):
    queryset = Mail.objects.all()
    serializer_class = MailSerializer


class MailDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mail.objects.all()
    serializer_class = MailSerializer