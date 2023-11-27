from django import forms
from api_rest.models import *

class PessoaModel2Form(forms.ModelForm):
  pNome = forms.CharField(label='user_nickname', max_length=100)
  pLogin = forms.CharField(label='user_email', max_length=100)
  pSenha = forms.CharField(label='user_password', max_length=100)

  class Meta:
    model = User
    fields = ['user_nickname',
              'user_email',
              'user_password',
    ]

class LocalModel2Form(forms.ModelForm):
  lNome = forms.CharField(label='airbnb_name ', max_length=100)
  lNomeUser = UserComments.user_nickname
  lComentario =forms.CharField(label='user_comment ', max_length=500)
  lNota = forms.TypedChoiceField(coerce=int, empty_value=None, choices=UserComments.user_note)

  class Meta:
    model = UserComments
    fields = ['airbnb_name ',
              'user_nickname',
              'user_note',
              'user_comment ',
    ]