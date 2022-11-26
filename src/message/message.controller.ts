import { Controller ,
    Post,
    Put,
    Get,
    Delete,
    Patch,
    Param,
    Body} from "@nestjs/common";
import { MessageService } from "./message.service";

@Controller('message')
export class MessageController{
    constructor(
        private readonly messageService: MessageService
    ){}

    @Get()
    async getAllUser(){
        const users = await this.messageService.getAll()
        return users;
    }

    @Post()
        async setMessage(
           @Body('sender')sende: string,
           @Body('message')messag: string
        ){
            const generatedId = await this.messageService.createMessage(sende,messag);
            return {id:generatedId};
        }
}

