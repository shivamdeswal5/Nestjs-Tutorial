import { Injectable } from "@nestjs/common";
import {users} from './users';

@Injectable()
export class CreateUserService{

    createUsers(user: {id:number,name:string,age:number,gender:string,isMarried: boolean}){
        users.push(user);
        return "User Created Successfully"
    }
}