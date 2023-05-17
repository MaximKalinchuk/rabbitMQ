import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}
  async getHello(id: string): Promise<string> {
    await this.amqpConnection.publish('Test2', 'my.update.event', {
      msg: `${id} was updated`,
    });
    await this.amqpConnection.publish('Test3', 'super.super', {
      msg: `${id} was deleted`,
    });

    return id;
  }
}
