import {users} from './users'

export class GetUserByIdService{
    
    getUserById(id:number){
        return users.find((user)=> user.id === id)
    }
}