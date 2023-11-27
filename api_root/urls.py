from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.views import LoginView, LogoutView
from django.urls.base import reverse_lazy
from api_root.views import *
from . import views

app_name = 'api_root'

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include('api_rest.urls'), name='api_rest_urls'),
    path("admin/", admin.site.urls),
    path("", views.PostsListView.as_view(), name = "home"),
    path('logout/', LogoutView.as_view(next_page=reverse_lazy('home'),), name='logout'),
    path('seguranca/cadastro/', views.cadastro, name='cadastro'),
    path('seguranca/login/', LoginView.as_view(template_name='seguranca/login.html',), name='login'),
    path('seguranca/novoPost/', views.novoPost, name='novoPost'),
]
