import { Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MessageController } from "./message.controller";
import { MessageGateWay } from "./message.gateway";
import { MessageSchema } from "./message.model";
import { MessageService } from "./message.service";
@Module({
    imports:[
        MongooseModule.forFeature([{name:"Message",schema:MessageSchema}])
    ],
    providers:[
        MessageService,
        MessageGateWay
    ],
    controllers:[
        MessageController,
    ]
})

export class MessageModule { }