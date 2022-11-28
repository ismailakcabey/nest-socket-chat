import { forwardRef, Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { io , Socket} from "socket.io-client";
import { MessageService } from "../message/message.service";

@Injectable()
export class SocketClient implements OnModuleInit{
    public socketClient: Socket;
    constructor(
        
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
                console.log(payload.message);
                
            })
        }  
    }
