from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name = 'signup'),
    path('login/', views.loginView, name ='login'),
    path('logout/', views.logout_view, name ='logout'),
    path('curr_user/', views.curr_user, name = 'curruser'),
    path('',views.index, name = 'index'),
]

