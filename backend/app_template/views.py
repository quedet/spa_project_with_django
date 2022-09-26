from django.shortcuts import render

from app_template.forms import LoginForm, SignupForm

# Create your views here.
def home(request):
    return render(request, "layout/base.html", {"page": "pages/home.html", "active_nav": "home"})

def login(request):
    return render(request, "layout/base.html", {"page": "pages/login.html", "active_nav": "login", "form": LoginForm()})

def signup(request):
    return render(request, "layout/base.html", {"page": "pages/signup.html", "active_nav": "signup", "form": SignupForm()})