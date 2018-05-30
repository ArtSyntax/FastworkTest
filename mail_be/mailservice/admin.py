# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from mailservice.models import Mail


class MailAdmin(admin.ModelAdmin):
    pass

admin.site.register(Mail, MailAdmin)
