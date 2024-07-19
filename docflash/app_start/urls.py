from operator import index
from django.urls import path
from .views import *

urlpatterns = [
    path('',index, name='index'),
    path('login/',login, name='login'),
    path('login/success/',login, name='login-success'),
    path('login/error/',login, name='login-error'),
    path('logout/',logout_view, name='logout'),
    path('signup/',signup, name='signup'),
    path('signup/success/',login, name='signup-success'),
    path('signup/error/',login, name='signup-error'),
    path('home/',home, name='home'),
]