# Fastwork Test - Email App #

Email Application

*Remark: Nothing is finished. more detail at developer note*

### What is this repository for? ###
- website for email sending

### Architecture ###
```
                                              _____________ 
                                             |             |
 ________          _____________      +--->  |  Sparkpost  |
|        |        |             |     |      |_____________|  
| client |  --->  | mailservice |  ---|       _____________
|________|        |_____________|     |      |             |
                                      +--->  |   MailGun   |
                                             |_____________|

```


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
 docker-compose build
```

### Running instructions ###
```
 docker run
```

### Testing instructions ###
```
 npm test
```


## Backend ##

### Dependencies ###
- Internal Service
    - python 2.7.12
    - django 1.11.13.
    - djangorest 3
    - django-cors-headers
    - sparkpost 2.1.2
- External Service
    - sparkpost 2.1.2
    - mailgun

### Building instructions ###
```
TODO
```

### Running instructions ###
```
 source env/bin/activate
 python manage.py runserver
```

### Testing instructions ###
```
 python manage.py test
```


### DEVELOPER NOTE ###
I try to develop but I find problems.

- Mail provider: A mail is sent by Sparkpost is usually limited. A mail is sent by Mailgun is success but it always drop. Mailgun told me to contact Internet service provider since part of their network is on our block list. User can input sender's email but it will change to provider mail at the backend service. Because it is free mail provider plan.

- React Testing: I try to use shallow to render component for testing by jest but it error at shallow function.
