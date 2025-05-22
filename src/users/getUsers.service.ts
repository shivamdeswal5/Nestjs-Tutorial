import { Injectable } from "@nestjs/common";
import {users} from './users'

@Injectable()
export class GetUsersService{
    
    getUsers(){
        return users;
    }
}