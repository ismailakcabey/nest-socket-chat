import { forwardRef, Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Socket } from "socket.io-client";
import { SocketClient } from "src/socket/socket-client";
import { SocketModule } from "src/socket/socket.module";
import { MessageClient } from "./message-client";
import { MessageController } from "./message.controller";
import { MessageSchema } from "./message.model";
import { MessageService } from "./message.service";
@Module({
    imports:[
        MongooseModule.forFeature([{name:"Message",schema:MessageSchema}]),
    ],
    providers:[
        MessageService,
        MessageClient
    ],
    controllers:[
        MessageController,
    ]
})

export class MessageModule { }