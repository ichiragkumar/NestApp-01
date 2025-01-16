


// here we will write a class for validating our todo
// we will use it;s object instance 

import {  IsEmail, IsNotEmpty } from "class-validator";



export class CreateTodo{

    @IsNotEmpty({message:"please enter todo name"})
    title :string;


    @IsNotEmpty({message:"please enter description"})
    description:string;

}


