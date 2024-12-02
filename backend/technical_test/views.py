from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import Question, TestSession
from django.conf import settings
import random
from django.utils import timezone
from datetime import timedelta

class StartTestAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, skill, format=None):
        # Get number of questions and time limit from settings or model
        num_questions = getattr(settings, 'TEST_DEFAULT_NUM_QUESTIONS', 20)
        time_limit_minutes = getattr(settings, 'TEST_DEFAULT_TIME_LIMIT', 30)
        
        # Fetch the questions based on skill and YoE
        questions = Question.objects.filter(skill=skill).values()[:num_questions]  # Adjust as needed
        
        # Start a test session
        session = TestSession.objects.create(
            user=request.user,
            skill=skill,
            yoe=request.user.experience,
            questions=questions,
            start_time=timezone.now(),
        )

        # Set the end time based on the time limit
        end_time = timezone.now() + timedelta(minutes=time_limit_minutes)
        session.end_time = end_time
        session.save()

        return Response({
            "test_id": session.id,
            "questions": questions,
            "time_limit": time_limit_minutes,
            "end_time": end_time,
        })


class SubmitTestAPIView(APIView):
    def post(self, request):
        test_id = request.data.get("test_id")
        user_answers = request.data.get("answers")  # Example: {"1": "A", "2": "B"}

        try:
            # Retrieve the test session
            test_session = TestSession.objects.get(id=test_id)

            # Retrieve questions from the session
            questions = test_session.questions

            # Initialize score and report
            score = 0
            detailed_report = []

            for question_id, user_answer in user_answers.items():
                question = Question.objects.get(id=question_id)

                # Check correctness
                is_correct = question.correct_option == user_answer
                if is_correct:
                    score += 1

                # Append details to the report
                detailed_report.append({
                    "question_id": question.id,
                    "question_text": question.question_text,
                    "user_answer": user_answer,
                    "correct_answer": question.correct_option,
                    "is_correct": is_correct
                })

            # Save user's answers and score in the test session
            test_session.answers = user_answers
            test_session.score = score
            test_session.end_time = timezone.now()
            test_session.save()

            return Response({
                "message": "Test submitted successfully",
                "score": score,
                "report": detailed_report
            }, status=status.HTTP_200_OK)

        except TestSession.DoesNotExist:
            return Response({"error": "Test session not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
