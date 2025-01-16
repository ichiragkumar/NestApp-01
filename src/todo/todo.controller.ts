import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { TodoService } from './todo.service';



@Controller('users')
export class TodoController {
    constructor(private  todoService: TodoService) {}


    @Get()
    getTodo() {
        return {
            msg:"from todo controller"
        }
    }

   

    @Get(':id')
    findOne(@Param('id') id: string) {
      return `This action returns a #${id} cat`;
    }


    @Get('/getodos')
    getTodos() {
        return {
            msg:"from todo controller second end point"
        }
    }


    @Get('/create')
    @HttpCode(201)
    createTodo():string {
        return this.todoService.createTodo();
       }
}