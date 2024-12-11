from django.db import models

# Create your models here.

class Token(models.Model):
    id = models.AutoField(primary_key=True)
    token = models.CharField(max_length=255)
    created_at = models.DateTimeField()
    expires_at = models.DateTimeField()
    user_id = models.IntegerField()
    is_used = models.BooleanField(default=False)


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    phone = models.CharField(max_length=10, null=True)
    district = models.CharField(max_length=255, blank=True, null=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    dob = models.DateField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    aadhar = models.CharField(max_length=12, null=True, blank=True)
    pan = models.CharField(max_length=10, null=True, blank=True)
    qualification = models.CharField(max_length=255, null=True, blank=True)
    experience = models.CharField(max_length=255, null=True, blank=True)
    domain = models.CharField(max_length=255, null=True, blank=True)
    skills = models.JSONField(default=list)  # Stores skills as a JSON array

    def __str__(self) -> str:
        return self.name

    
    