# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

class Mail(models.Model):
    to_mail = models.CharField(max_length=200)
    from_mail = models.CharField(max_length=200)
    subject = models.CharField(max_length=200, blank=True, default='')
    text = models.CharField(max_length=5000, blank=True, default='')

