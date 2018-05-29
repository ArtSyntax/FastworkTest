from django.conf.urls import url, include
from rest_framework import routers
from mailservice import views

router = routers.DefaultRouter()
# router.register(r'mail', views.MailList)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^mail/$', views.MailList.as_view(), name="mail"),
    # url(r'^mail/(?P<pk>[0-9]+)/$', views.MailDetail.as_view()),
]