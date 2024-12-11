from django.urls import path
from .views import StartTestAPIView, SubmitTestAPIView
import views

urlpatterns = [
    path('questions/CNC Programmer/', views.QuestionView.as_view(), name='questions'),

]