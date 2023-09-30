FROM python:3.9

WORKDIR /app

COPY backend.py .

RUN pip install --no-cache-dir flask

RUN pip install flask-cors

# Make port 5000 available to the world outside this container
EXPOSE 5002

# Define environment variable for Flask to run in production mode
ENV FLASK_ENV=production


CMD ["python", "backend.py"]
