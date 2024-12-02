from django.urls import path
from .views import StartTestAPIView, SubmitTestAPIView

urlpatterns = [
    path("start-test/", StartTestAPIView.as_view(), name="start-test"),
    path("submit-test/", SubmitTestAPIView.as_view(), name="submit-test"),
]