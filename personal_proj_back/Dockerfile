FROM python:3.13-slim

WORKDIR /app

RUN pip install --upgrade pip

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["gunicorn", "personal_proj_api.wsgi", "--bind", "0.0.0.0:8000"]