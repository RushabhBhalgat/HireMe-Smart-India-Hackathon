from django.db import models
from api.models import User  # Importing the User model

class Question(models.Model):
    q_id = models.AutoField(primary_key=True)
    skill = models.CharField(max_length=255)  # Skill the question belongs to
    yoe = models.IntegerField()  # Years of Experience
    question_text = models.TextField()
    option_a = models.CharField(max_length=255)
    option_b = models.CharField(max_length=255)
    option_c = models.CharField(max_length=255)
    option_d = models.CharField(max_length=255)
    correct_option = models.CharField(max_length=1)  # 'A', 'B', 'C', or 'D'
    concept_tag = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.question_text


class TestSession(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    skill = models.CharField(max_length=255)
    yoe = models.IntegerField()
    questions = models.JSONField()  # Stores selected questions as JSON
    answers = models.JSONField(default=dict)  # Stores user answers
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(null=True, blank=True)
    score = models.IntegerField(default=0)  # Final score

    def __str__(self):
        return f"Test for {self.user.username} on {self.skill}"

    
class TestSettings(models.Model):
    num_questions = models.IntegerField(default=20)  # Default 20 questions per test
    time_limit_minutes = models.IntegerField(default=30)  # Default 30 minutes per test


