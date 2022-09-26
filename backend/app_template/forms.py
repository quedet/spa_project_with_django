from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django import forms

class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={"id": "login-username", "class": "input"}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={"id": "login-password", "class": "input"}))
    
class SignupForm(UserCreationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={"id": "signup-username", "class": "input"}))
    email = forms.CharField(widget=forms.EmailInput(attrs={"id": "signup-email", "class": "input"}))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={"id": "signup-password", "class": "input"}))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={"id": "signup-password-confirm", "class": "input"}))