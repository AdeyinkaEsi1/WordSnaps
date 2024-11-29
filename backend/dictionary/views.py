import requests
from django.http import JsonResponse
from django.conf import settings

MERIAM_WEBSTER_API_KEY = '208aa66c-62ce-4125-a911-7df6158251ba'
BASE_URL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"


def get_word_definition(request, word):
    
    url = f"{BASE_URL}{word}?key={MERIAM_WEBSTER_API_KEY}"
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data:
            return JsonResponse(data[0], safe=False)
        else:
            return JsonResponse({'error': 'Word not found'}, status=404)
    else:
        return JsonResponse({'error': 'Failed to fetch word from Merriam Webster'}, status=500)    
    
    
    



#  npx tailwindcss -i ./src/style.css -o ./dist/stylesheet.css --watch
# docker-compose up
# docker-compose exec web python manage.py runserver 0.0.0.0:8000

