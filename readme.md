# Fastwork Test - Email App #

Email Application

### What is this repository for? ###
- website for email sending and view history.

### Architecture ###
```
                                              _____________ 
                                             |             |
 ________          _____________      +--->  |  Sparkpost  |
|        |        |             |     |      |_____________|  
| client |  --->  | mailservice |  ---|       _____________
|________|        |_____________|     |      |             |
                         |            +--->  |   MailGun   |
                      ___v___                |_____________|
                     /       \
                    |\_______/|
                    |    DB   |
                     \_______/

```

### Deployment ###
```
 /fastwork/mail_fe$ docker-compose up -d
 /fastwork/mail_be$ docker-compose up -d
```
open application [http://localhost:8000](http://localhost:8000) in the browser

### Project Structure ###

```
fastwork/
    |
    |-- mail_fe/
    |     |
    |     |-- src/
    |     |     |-- components/
    |     |     |-- forms/
    |     |     |-- index.js
    |     |     |-- index.css
    |     |
    |     |-- test/
    |           |-- components/
    |           |-- forms/
    |     
    |-- mail_be/
          |
          |-- mail_be/
          |-- mailservice/
          

```

## Frontend ##

### Dependencies ###
- Internal Service
    - npm 5.6.0
    - node 10.1.0
    - react 16.3.2
    - enzyme 3.3.0
    - jest
    - docker 18.03.1-ce
    - docker-compose 1.8.0
- External Service
    - mailservice 1.0.0

### Building instructions ###
```
 npm run build
```

### Running instructions ###
```
 npm start
```

### Testing instructions ###
```
 npm test
```

### Deployment instructions ###
```
 docker-compose up
```

## Backend ##

### Dependencies ###
- Internal Service
    - python 2.7.12
    - django 1.11.13.
    - djangorest 3.7.7
    - django-cors-headers
    - sparkpost 2.1.2
- External Service
    - sparkpost 2.1.2
    - mailgun

### Running instructions ###
```
 source env/bin/activate
 python manage.py runserver
```

### Testing instructions ###
```
 python manage.py test
```

### Deployment instructions ###
```
 docker-compose up
```

### API Documentations ###
- [send mail](mail_be/docs/send_mail.md)
- [view mail history](mail_be/docs/view_mail_history.md)

### DEVELOPER NOTE ###
I try to develop but I find problems.

- Mail provider: A mail is sent by Sparkpost is usually limited. A mail is sent by Mailgun is success but it always drop. Mailgun told me to contact Internet service provider since part of their network is on our block list. User can input sender's email but it will change to provider mail at the backend service. Because it is free mail provider plan.
- React Testing: I try to use shallow to render component for testing by jest but it error at shallow function.

### Future Feature ###
- Using environment variable and config file instead of hard code
- Implement API Gateway
- Implement Authentication
- Fix unit test
- Upgrade or change mail provider