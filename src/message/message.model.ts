import * as mongoose from "mongoose";

export const MessageSchema = new mongoose.Schema({
    sender:{
        type:String,
        require:true
    },
    message:{
        require:true,
        type:String
    },
    date:{
        require:true,
        type:Date
    }
})

export interface Message extends mongoose.Document{
    id:string,
    sender:string,
    message:string,
    date:Date,
}