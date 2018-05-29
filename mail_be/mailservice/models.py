# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

class Mail(models.Model):
    STATUS = (
        ('S', 'Success'),
        ('F', 'Fail'),
    )

    to_mail = models.EmailField(max_length=200)
    from_mail = models.EmailField(max_length=200)
    subject = models.CharField(max_length=200, blank=True, default='')
    text = models.CharField(max_length=5000, blank=True, default='')
    status = models.CharField(max_length=1, choices=STATUS, default='F')

