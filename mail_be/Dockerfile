FROM python:2.7.12

# Copy source.
RUN mkdir /mailservice
WORKDIR /mailservice
COPY . /mailservice

# Install dependency
RUN apt-get -y update
RUN apt-get install -y python python-pip postgresql-client
RUN pip install -r /mailservice/requirements.txt
RUN apt-get -y update && apt-get -y autoremove

# Set the command to start the server.
CMD python manage.py runserver 0.0.0.0:8000

