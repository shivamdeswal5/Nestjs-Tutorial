import { Injectable, Scope } from "@nestjs/common";
import {users} from './users'

@Injectable({scope: Scope.DEFAULT})
export class GetUsersService{
    
    getUsers(){
        return users;
    }
}