from django.conf import settings
from sparkpost import SparkPost
import requests as rq


class MailServiceMixin(object):

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