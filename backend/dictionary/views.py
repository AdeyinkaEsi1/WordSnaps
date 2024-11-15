from django.shortcuts import render
from django.http import HttpResponse

def hello(request):
    return HttpResponse('hello world. We are using dockerrrr!!!!')


#  npx tailwindcss -i ./src/style.css -o ./dist/stylesheet.css --watch
# docker-compose up
# docker-compose exec web python manage.py runserver 0.0.0.0:8000