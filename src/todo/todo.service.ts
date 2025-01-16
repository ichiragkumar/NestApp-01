import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {

    
    createTodo():string {
        return "todo created";
      }
}
