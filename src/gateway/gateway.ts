import { Body, OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "dgram";
import { Server } from "socket.io";

@WebSocketGateway()
export class MyGateWay implements OnModuleInit{
    @WebSocketServer()
    server : Server;

    onModuleInit(){
        this.server.on('connection',(socket)=>{
            console.log(socket.id)
            console.log('connected')
        })
    }

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody()Body:{sender: string, message: string}){
        console.log(Body)
        this.server.emit('onMessage',Body)
    }
}