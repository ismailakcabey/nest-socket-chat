import { forwardRef, Module } from "@nestjs/common";
import { MessageModule } from "src/message/message.module";
import { MessageService } from "src/message/message.service";
import { SocketClient } from "./socket-client";

@Module({
    providers:[
        SocketClient,    
    ],
    
})
export class SocketModule{

}