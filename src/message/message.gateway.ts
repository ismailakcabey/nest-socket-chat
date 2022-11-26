// import { Inject , Logger} from "@nestjs/common";
// import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
// import { MessageService } from "./message.service";
// import { Server } from 'socket.io'

// @WebSocketGateway(4000,{namespace:'message'})
// export class MessageGateWay implements OnGatewayConnection , OnGatewayDisconnect , OnGatewayInit{
    
//     @Inject()
//     private messageService: MessageService;

//     @WebSocketServer()
//     private wss : Server
//     private logger : Logger = new Logger('MessageGateWay');
//     private count : number = 0;

//     public async handleConnection(client: any, ...args: any[]) {
//         this.count +=1;
//         this.logger.log(`connected : ${this.count}  connetion`)
//         const messages = await this.messageService.getAll();
//         client.emit('all messages to client', messages)
//     }
//     handleDisconnect(client: any) {
//         this.count -=1;
//         this.logger.log(`disConnected : ${this.count}  connetion`)
//     }
//     afterInit(server: any) {
//         this.logger.log(`messageGateWat initialization`)
//     }

//     @SubscribeMessage('new-message-tp-server')
//     public async handleNewMessage(@MessageBody()data:{sender:string, message:string}){
//         const message = await this.messageService.createMessage(data.sender , data.message);
//         this.wss.emit('new-message-to-client', message)
//     }
    
// }

//

import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway()
export class MessageGateWay {
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: {sender:string , message:string}): void {
    this.server.emit('message', data.sender, data.message);
  }
}