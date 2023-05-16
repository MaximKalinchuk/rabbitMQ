import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    exchange: 'Test',
    routingKey: 'my-key2',
    queue: 'my-q2',
  })
  public async pubSubHandler(msg: any) {
    const dataFromRabbitMq = JSON.stringify(msg);
    const parsedData = JSON.parse(dataFromRabbitMq);
    console.log(parsedData.msg);
  }
}
