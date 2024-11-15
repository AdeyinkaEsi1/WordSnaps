FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Copy requirements from the root of the project to /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Copy everything else from the backend folder
COPY . /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
