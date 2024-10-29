import { Injectable } from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService{
    constructor(public messagesRepo: MessagesRepository){    }

    findOne(id:string){
        return this.messagesRepo.findOne(id)
    }

    findAll(){
        return this.messagesRepo.findAll()
    }

    createMessage (content:CreateMessageDto){
        return this.messagesRepo.create(content)
    }
}