from django.shortcuts import render
from django.http import HttpResponse

def hello(request):
    return HttpResponse('hello world. using dockerrrr!!!!')




#  npx tailwindcss -i ./src/style.css -o ./dist/stylesheet.css --watch
# docker-compose up
# docker-compose exec web python manage.py runserver 0.0.0.0:8000

# a match prediction system. on frontend, an input output system. a list of match is displayed served by backend. choose a match and it gives two possible outcomes