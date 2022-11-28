import { forwardRef, Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { io , Socket} from "socket.io-client";
import { MessageService } from "./message.service";

@Injectable()
export class MessageClient implements OnModuleInit{
    public socketClient: Socket;
    constructor(
        private readonly messageService: MessageService
    ){
        
        this.socketClient = io('http://localhost:3000')
        
    }
    onModuleInit() {
        this.registerConsumerEvents()
        }
        private registerConsumerEvents(){
            //this.socketClient.emit('newMessage',{msg:'hey there'})
            this.socketClient.on('connect',()=>{
                console.log('connect gateway')
            });
            this.socketClient.on('onMessage',(payload:any)=>{
                console.log(payload.sender + "SENDER");
                console.log(payload.message + "MESSAGE");
                this.messageService.createMessage(payload.sender , payload.message)
            })
        }  
    }
