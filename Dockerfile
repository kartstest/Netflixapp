FROM python:3.11.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"
RUN apt-get update && apt-get install -y libpq-dev
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
CMD ["/venv/bin/python3", "manage.py", "runserver", "0.0.0.0:8000"]
