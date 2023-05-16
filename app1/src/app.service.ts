import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}
  async getHello(id: string): Promise<string> {
    await this.amqpConnection.publish('Test', 'my-key2', {
      msg: {
        userId: id,
      },
    });
    return id;
  }
}
