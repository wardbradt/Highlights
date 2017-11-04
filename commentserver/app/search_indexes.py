# search_indexes.py

from haystack import indexes
from app.models import Comment

class CommentIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)
    #rendered = indexes.CharField(use_template=True, indexed=False)
    
    def get_model(self):
        return Comment
        
    def index_queryset(self, using=None):
        return self.get_model().objects.all()