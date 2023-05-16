<p align="center">
  <a href="#" target="blank"><img src="https://srv.monster/images/logo/rabbitmq.png" width="400" alt="Nest Logo" /></a>
</p>

## Описание

Простой пример работы двух NestJS приложений по средством брокера RabbitMQ.

Не забудьте поставить docker локально.

## Запуск

```bash
# Запустить RabbitMQ в докере
$ docker-compose up -d

# Запускаем первое приложение
$ yarn start ./app1

# Запускаем второе приложение
$ yarn start ./app2
```

## Логин и пароль RabbitMQ
RabbitMQ: http://localhost:15672
```
email: guest
password: guest
```

## Стэк

Server: NestJS, TypeScript, RabbitMQ
