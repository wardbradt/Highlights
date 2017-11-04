from django.shortcuts import render

# Create your views here.
def get_comments(request):
    html = "<html></html>"
    return HttpResponse(html)