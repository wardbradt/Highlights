# api/resources.py

from tastypie.resources import ModelResource
from app.models import Comment
from tastypie.authorization import Authorization

class CommentResource(ModelResource):
    class Meta:
        queryset = Comment.objects.all()
        resource_name = 'comment'
        authorization = Authorization()
