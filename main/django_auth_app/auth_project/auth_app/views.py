import os
from django.conf import settings
from django.shortcuts import render , redirect 
from .models import App_User
from django.http import JsonResponse,  HttpResponse
from rest_framework.decorators import api_view
from django.core.serializers import serialize
from django.contrib.auth import authenticate, login, logout
# from django.views.decorators.csrf import csrf_exempt

import json


# @csrf_exempt
@api_view(["POST"])
def signup(request):
    email = request.data['email']
    password = request.data['password']
    name = request.data['name']
    super_user = False
    staff = False
    if 'super' in request.data:
        super_user = request.data['super']
    if 'staff' in request.data:
        staff = request.data['staff']
    
    try:
        new_user = App_User.objects.create_user(username = email, email = email , name = name , password = password)
        new_user.save()
        return JsonResponse({'success':True})
    except Exception as e:
        print(e)
        return  JsonResponse({'success':False})
    
    
    
# @csrf_exempt
@api_view(["POST"])
def logout_view(request):
    try:
        logout(request)
        return JsonResponse({'signout':True})
    except Exception as e:
        print(e)
        return JsonResponse({'signout':False})
    
    
# @csrf_exempt
@api_view(["POST"])
def loginView(request):
    email = request.data['email']
    password = request.data['password']

    # Print the email and password received
    print("Email:", email)
    print("Password:", password)

    # Try to authenticate the user
    user = authenticate(username=email, password=password)

    # Print the result of authentication
    print("Authenticated user:", user)

    if user is not None and user.is_active:
        try:
            login(request._request, user)
            return JsonResponse({'login': True})
        except Exception as e:
            print("Error during login:", e)
            return JsonResponse({'lgoin': False})
    else:
        # If authentication fails, print why
        if user is None:
            print("Authentication failed: user not found or incorrect password.")
        elif not user.is_active:
            print("Authentication failed: user is not active.")
        return JsonResponse({'login': False})
    
    
    

# @csrf_exempt
@api_view(["GET"])
def curr_user(request):
    if request.user.is_authenticated:
        user_info = serialize("json", [request.user], fields = ['name', 'email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse({'user':user_info_workable[0]['fields']})
    else:
        return JsonResponse({'user':None})
    
    
    


def index(request):
    with open(os.path.join(settings.BASE_DIR, 'static', 'index.html'), 'r') as the_index:
        return HttpResponse(the_index.read())