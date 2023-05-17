import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    exchange: 'Test2',
    routingKey: 'my.*.event',
    queue: 'my-q1',
  })
  public async pubSubHandler(msg: any) {
    const dataFromRabbitMq = JSON.stringify(msg);
    const parsedData = JSON.parse(dataFromRabbitMq);
    console.log(parsedData.msg);
  }

  // @RabbitSubscribe({
  //   exchange: 'Test2',
  //   routingKey: 'my.*.*',
  //   queue: 'my.q.b',
  // })
  // public async pubSubHandler2(msg: any) {
  //   const dataFromRabbitMq = JSON.stringify(msg);
  //   const parsedData = JSON.parse(dataFromRabbitMq);
  //   console.log(parsedData.msg);
  // }
}
