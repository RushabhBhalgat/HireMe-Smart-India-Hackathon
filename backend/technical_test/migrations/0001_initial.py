# Generated by Django 4.2.16 on 2024-12-02 17:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("api", "0003_user_aadhar_user_address_user_dob_user_domain_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Question",
            fields=[
                ("q_id", models.AutoField(primary_key=True, serialize=False)),
                ("skill", models.CharField(max_length=255)),
                ("yoe", models.IntegerField()),
                ("question_text", models.TextField()),
                ("option_a", models.CharField(max_length=255)),
                ("option_b", models.CharField(max_length=255)),
                ("option_c", models.CharField(max_length=255)),
                ("option_d", models.CharField(max_length=255)),
                ("correct_option", models.CharField(max_length=1)),
                ("concept_tag", models.CharField(blank=True, max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name="TestSettings",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("num_questions", models.IntegerField(default=20)),
                ("time_limit_minutes", models.IntegerField(default=30)),
            ],
        ),
        migrations.CreateModel(
            name="TestSession",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("skill", models.CharField(max_length=255)),
                ("yoe", models.IntegerField()),
                ("questions", models.JSONField()),
                ("answers", models.JSONField(default=dict)),
                ("start_time", models.DateTimeField(auto_now_add=True)),
                ("end_time", models.DateTimeField(blank=True, null=True)),
                ("score", models.IntegerField(default=0)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="api.user"
                    ),
                ),
            ],
        ),
    ]