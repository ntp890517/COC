# Generated by Django 2.0.1 on 2018-02-14 21:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Create_Character', '0002_auto_20180211_1120'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='weapon',
            name='firmness',
        ),
        migrations.RemoveField(
            model_name='weapon',
            name='presentEra',
        ),
        migrations.RemoveField(
            model_name='weapon',
            name='price',
        ),
    ]