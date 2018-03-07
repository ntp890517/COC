from django.http import Http404
from django.shortcuts import render
from Create_Character.models import Character

def test(request):
    try:
        c = Character.objects.all()[:1].get()
    except Character.DoesNotExist():
        raise Http404("Character does not exist")
    return render(request, 'test.html', {'character': c})
#from polls.models import Poll

#def test(request, poll_id):
#    try:
#        p = Poll.objects.get(pk=poll_id)
#    except Poll.DoesNotExist:
#        raise Http404("Poll does not exist")
#    return render(request, 'polls/detail.html', {'poll': p})

def index(request):
    return render(request, 'index.html')
