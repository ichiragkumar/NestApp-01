import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class TodoController {


    @Get()
    getTodo() {
        return {
            msg:"from todo controller"
        }
    }


    @Get('/getodos')
    getTodos() {
        return {
            msg:"from todo controller second end point"
        }
    }
}