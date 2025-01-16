import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {


    createTodo():object {
        return {
            msg:"todo created successfully"
        }
      }
}
