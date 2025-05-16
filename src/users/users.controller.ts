import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./user.service";

@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query('gender') query:string){
        const usersServices = new UsersService();
        if(query){
            return usersServices.getUsers().filter(u => u.gender === query);
        }
        return usersServices.getUsers();

    }

    @Get(':id')
    getUserById(@Param('id') id :string){
        const usersServices = new UsersService();
        return usersServices.getUserById(+id);
    }

    @Post()
    createUsers(){
        const user = {id:3,name:'Deswal', age: 21, gender:'male',isMarried:false}
        const usersServices = new UsersService();
        return usersServices.createUsers(user);
    }

}