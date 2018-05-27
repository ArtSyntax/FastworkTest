from django.conf.urls import url, include
from rest_framework import routers
from mailservice import views

router = routers.DefaultRouter()
# router.register(r'mail', views.MailList)

urlpatterns = [
    url(r'^', include(router.urls)),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^mail/$', views.MailList.as_view()),
    url(r'^mail/(?P<pk>[0-9]+)/$', views.MailDetail.as_view()),
]