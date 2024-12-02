from django.contrib import admin

# Register your models here.

from .models import Question, TestSession, TestSettings

admin.site.register(Question)
admin.site.register(TestSession)
admin.site.register(TestSettings)