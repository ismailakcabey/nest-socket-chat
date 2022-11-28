import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { async } from "rxjs";
import { SocketClient } from "src/socket/socket-client";
import { Message } from "./message.model";

@Injectable()
export class MessageService {

    constructor(
        @InjectModel('Message') private readonly messageModel : Model<Message>,
       
    ){}


    async getAll(){
        const message = await this.messageModel.find().exec();
        return message
    }

    async createMessage(sender: string , message : string){
        const newMessage = new this.messageModel({
            sender,
            message,
            date:Date.now(),
        });
        const result = await newMessage.save();
    }
}