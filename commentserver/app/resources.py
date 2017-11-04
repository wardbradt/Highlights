# api/resources.py

from django.conf.urls import url, include
from django.core.paginator import Paginator, InvalidPage
from django.http import Http404
from tastypie.resources import ModelResource
from app.models import Comment
from tastypie.authorization import Authorization
from haystack.query import SearchQuerySet
from tastypie.utils import trailing_slash

class CommentResource(ModelResource):
    class Meta:
        queryset = Comment.objects.all()
        resource_name = 'comment'
        authorization = Authorization()
        
    def prepend_urls(self):
        return [
            url(r"^api/comment/search%s" % (trailing_slash()), self.wrap_view('get_search'), name="api_get_search"),
        ]
        
    def get_search(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        #self.is_authenticated(request)
        self.throttle_check(request)

        # Do the query.
        sqs = SearchQuerySet().models(Comment).load_all().auto_query(request.GET.get('q', ''))
        paginator = self._meta.paginator_class(request.GET, sqs,
            resource_uri=self.get_resource_uri(), limit=self._meta.limit,
            max_limit=self._meta.max_limit, collection_name=self._meta.collection_name)

        to_be_serialized = paginator.page()

        bundles = [self.build_bundle(obj=result.object, request=request) for result in to_be_serialized['objects']]
        to_be_serialized['objects'] = [self.full_dehydrate(bundle) for bundle in bundles]
        to_be_serialized = self.alter_list_data_to_serialize(request, to_be_serialized)
        return self.create_response(request, to_be_serialized)