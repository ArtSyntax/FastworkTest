# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.test import TestCase
from django.urls import reverse
from unittest import skip
from rest_framework import status
from mailservice.models import *


class MailHistoryApiTest(TestCase):
    def test_get_mail(self):
        url = reverse('mail')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_mail_with_filter(self):
        url = reverse('mail')
        response = self.client.get(url, {'subject': 'hello'}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class MailSendingApiTest(TestCase):
    def test_create_account_null_body(self):
        url = reverse('mail')
        data = {}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_account_invalid_email(self):
        url = reverse('mail')
        data = {
            "from_mail": "sender",
            "to_mail": "receiver"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    @skip("TODO: mock mail provider")
    def test_create_account_valid_body(self):
        url = reverse('mail')
        data = {
            "from_mail": "sender@mail.com",
            "to_mail": "receiver@mail.com"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Mail.objects.count(), 1)
