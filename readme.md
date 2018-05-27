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
    |     |--src/
    |     
    |-- mail_be/
          |
          |--mail_be/
          |--mailservice/
          

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
 TODO
```


### DEVELOPER NOTE ###
This is my first time with React framework.
I try to develop but I find problems.

- Mail provider: I can curl to send email. But when I call api by http request or mail provider library, a response is 401 UNAUTHORIZED with Access-Control-Allow-Origin.
- Testing: I try to use shallow to render component for testing by jest but it error at shallow function.
- Building: I can use Sparkpost library on local run, but the library is error when I run a command, npm build.