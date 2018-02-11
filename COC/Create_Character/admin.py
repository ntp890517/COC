from django.contrib import admin
from Create_Character.models import Character
from Create_Character.models import Job
from Create_Character.models import SkillCategory, Skill
from Create_Character.models import WeaponCategory, Weapon

# Register your models here.
admin.site.register(Character)
admin.site.register(Job)
admin.site.register(SkillCategory)
admin.site.register(Skill)
admin.site.register(WeaponCategory)
admin.site.register(Weapon)
