from django.shortcuts import render, redirect
from django.views.generic.base import View
from django.views.generic.edit import UpdateView
from django.urls.base import reverse_lazy
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required, user_passes_test
from api_rest.models import *
#from api_root.view import *
from api_rest.views import get_all_comments

def home(request):
  return render(request, 'airbnb2/home.html')

def login(request):
  return render(request, 'seguranca/login.html')

def cadastro(request):
  if request.method == 'POST':
    formulario = UserCreationForm(request.POST)
    if formulario.is_valid():
      formulario.save()
      return redirect('home')
    
  else:
    formulario = UserCreationForm()

  context = {'form': formulario, }
  return render(request, 'seguranca/cadastro.html', context)

@login_required
@user_passes_test
def novoPost(request):
  return render(request, 'seguranca/inserePost.html')

#class PostsListView(View):
    #post = get_all_comments('GET')
    #def get(self, request, *args, **kwargs):
      #  post = get_all_comments(request)
       # contexto = { 'airbnb_name': post, 'user_nickname':request.user}
       #return render(request, 'home.html', contexto)