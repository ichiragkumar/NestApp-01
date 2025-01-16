import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodo } from './todo.dto';
import { todo } from 'node:test';

interface Todo {
    id: string;
    title: string;
    description: string;
}

@Controller('users')
export class TodoController {
    constructor(private  todoService: TodoService) {}


    @Get()
    getTodo() {
        return {
            msg:"from todo controller"
        }
    }

   

    @Get('/userTodo/:id')
    findOne(@Param('id') id: string) {
      return `This action returns a #${id} cat`;
    }


    @Get('/getodos')
    getTodos() {
        return {
            msg:"from todo controller second end point"
        }
    }




    private todos = []
    @Post('/create')
    createTodo(@Body() data: CreateTodo) {

        const item = {
            id: Date.now().toString(),
            ...data,
        }


        this.todos.push(item);

        return {
            allTodos: this.todos,
            msg:"todo created successfully"
        };
    }


    @Get('/all')
    getAllTodos() {
        return {
            allTodos: this.todos,
            msg:"all todos"
        }
    }

    @Put("/update/:id")
    updateTodo(@Param('id') id: string, @Body() data: CreateTodo) {
        const item = this.todos.find(item => item.id === id)
  
        if (!item) {
            return {
                msg:"todo not found"
            }
        }
        item.title = data.title;
        item.description = data.description;
        return {
            msg:"todo updated successfully"
        }
    }


    @Delete("/delete/:id")
    deleteTodo(@Param('id') id:string, @Body() data: CreateTodo){
        const updatedtodo = this.todos.filter(item => item.id != id)
        this.todos = updatedtodo;
        
        if(!updatedtodo ){
            return {
                msg: "Todo not found"
            }
        }

        return {
            msg: `Item Delete with this id ${id} and Titel ${data.title}`
        }
    }




}