# Fastwork Test - Email App #

Email Application

*Remark: Nothing is finished. more detail at developer note*

### What is this repository for? ###
- website for email sending

### Project Structure ###

```
fastwork/
    |
    |-- mail_fe/
          |
          |-- src/

```

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
    - sparkpost 2.1.2

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

### DEVELOPER NOTE ###
This is my first time with React framework.
I try to develop but I find problems.

- Mail provider: I can curl to send email. But when I call api by http request or mail provider library, a response is 401 UNAUTHORIZED with Access-Control-Allow-Origin.
- Testing: I try to use shallow to render component for testing by jest but it error at shallow function.
- Building: I can use Sparkpost library on local run, but the library is error when I run a command, npm build.