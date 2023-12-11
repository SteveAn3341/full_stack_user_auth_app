

from django.db import models
from django.contrib.auth.models import AbstractUser

class App_User(AbstractUser):
    email = models.EmailField(blank = True, null = False, unique = True)
    name = models.CharField(max_length = 225, null = False, blank = False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    
    def _str_(self):
        return f"{self.name} | {self.email}"

