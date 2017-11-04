from django.db import models

# Create your models here.
class Comment(models.Model):
    text = models.CharField(max_length=400)
    webpage = models.CharField(max_length=250)
    selectedText = models.CharField(max_length=400)
    
    def __str__(self):
        return '{}'.format(text)