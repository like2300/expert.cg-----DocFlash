from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

from datetime import date
def index(request):
    return render(request, 'index.html' ,{'year': date.today().year})

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        print(email, password)
        user = authenticate(request, email=email, password=password)
        print(user)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            return render(request, 'login.html', {'year': date.today().year})

    return render(request, 'login.html', {'year': date.today().year})


@login_required
def logout_view(request):
    logout(request)
    return redirect('index')

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
        else:
            return render(request, 'login.html', {'year': date.today().year})
    else:
        form = UserCreationForm()
        return render(request, 'login.html', { 'year': date.today().year})




def home(request):
    return render(request, 'home.html' ,{'year': date.today().year})
    