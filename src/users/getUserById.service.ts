import { Injectable } from "@nestjs/common";
import {users} from './users'

@Injectable()
export class GetUserByIdService{
    
    getUserById(id:number){
        return users.find((user)=> user.id === id)
    }
}