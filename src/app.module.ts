import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MessageModule } from './message/message.module';
import { GatewayModule } from './gateway/gateway.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    
    MongooseModule.forRoot(
      'mongodb+srv://ismailakcabey:nodejs@denemedatabase.an06h.mongodb.net/order?retryWrites=true&w=majority'
    ),
    MessageModule,
    SocketModule,
    GatewayModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
