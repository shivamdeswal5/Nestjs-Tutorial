import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./user.service";

@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query() query:any){
        const usersServices = new UsersService();
        console.log(query);
        return usersServices.getUsers();

    }

    @Get(':id')
    getUserById(@Param('id') param :string){
        const id = parseInt(param);
        const usersServices = new UsersService();
        return usersServices.getUserById(id);
    }

    @Post()
    createUsers(){
        const user = {id:3,name:'Deswal', age: 21, gender:'male',isMarried:false}
        const usersServices = new UsersService();
        return usersServices.createUsers(user);
    }

}