# Validators
from django.core.validators import MaxValueValidator
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def Validate3D6X5(value):
    if value < 15 or value > 90:
        raise ValidationError(
            _('%(value)s is out of range (3D6 X5 : 15~90)'),
            params={'value': value},
        )
def Validate2D6X5(value):
    if value < 10 or value > 60:
        raise ValidationError(
            _('%(value)s is out of range (2D6 X5 : 10~60)'),
            params={'value': value},
        )
def ValidateHealthPoint(value):
    if value < 2 or value > 15:
        raise ValidationError(
            _('%(value)s is out of range (HP : 2~15'),
            params={'value': value}
        )
def ValidateMagicPoint(value):
    if value < 3 or value > 18:
        raise ValidationError(
            _('%(value)s is out of range (MP : 3~18'),
            params={'value': value}
        )

# Models
from django.db import models

class Character(models.Model):
    id = models.AutoField(primary_key = True)
    dateTime_created = models.DateTimeField(auto_now_add = True)
    dateTime_modified = models.DateTimeField(auto_now = True)

    # Basic Information
    name = models.CharField(max_length = 125)
    job = models.CharField(max_length = 125)
    highestEducationLeval = models.CharField(max_length = 125)
    era = models.CharField(max_length = 125)
    gender = models.CharField(max_length = 125)
    age = models.PositiveSmallIntegerField()
    location_born = models.CharField(max_length = 125)
    location_live = models.CharField(max_length = 125)

    # Properties
    strength = models.PositiveSmallIntegerField(validators = [MaxValueValidator(99)])
    constitution = models.PositiveSmallIntegerField(validators = [MaxValueValidator(99)])
    dexterity = models.PositiveSmallIntegerField(validators = [MaxValueValidator(99)])
    appearance = models.PositiveSmallIntegerField(validators = [MaxValueValidator(99)])
    power = models.PositiveSmallIntegerField(validators = [MaxValueValidator(99)])
    intelligence = models.PositiveSmallIntegerField(validators = [MaxValueValidator(99)])
    size = models.PositiveSmallIntegerField(validators = [MaxValueValidator(99)])
    education = models.PositiveSmallIntegerField(validators = [MaxValueValidator(99)])
    luck = models.PositiveSmallIntegerField(validators = [MaxValueValidator(99)])
    appearanceDescription = models.TextField()
    story = models.TextField()

    # Status
    healthPoint = models.PositiveSmallIntegerField(validators = [ValidateHealthPoint])
    magicPoint = models.PositiveSmallIntegerField(validators = [ValidateMagicPoint])
    sanity = models.PositiveSmallIntegerField()
    build = models.SmallIntegerField()
    damageBreak = models.PositiveSmallIntegerField()
    mobility = models.PositiveSmallIntegerField()
