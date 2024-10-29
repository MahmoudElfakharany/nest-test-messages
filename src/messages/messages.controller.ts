import { CreateMessageDto } from './dtos/create-message.dto';
import { Controller, Get, Post, Body, Param, NotFoundException} from '@nestjs/common';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController {
    constructor(public messagesService:MessagesService){}

    @Get()
    listMessages(){
        return this.messagesService.findAll()
    }

    @Post()
    createMessage(@Body() body:CreateMessageDto){
        return this.messagesService.createMessage(body)
    }

    @Get("/:id")
    async getMessage(@Param("id") id:string){
        const message = await this.messagesService.findOne(id)
        
        if (!message) {
            throw new NotFoundException("Message not found")
        }
        return message
    }
}
