import { Controller, Get, Param, Post, Query, ParseIntPipe, Inject } from "@nestjs/common";
import { GetUsersService } from "./getUsers.service";
import { GetUserByIdService } from "./getUserById.service";
import { CreateUserService } from "./createUser.service";

@Controller('users')
export class UsersController {
    constructor(private getUsersService:GetUsersService, private createUserService: CreateUserService, 
     @Inject(GetUserByIdService) private getUserByIdService : GetUserByIdService,
     @Inject('DATABASE_CONNECTION') private connection){
        console.log("Dependency Injected..");
        console.log(connection);
     }
    
    @Get()
    getUsers(@Query('gender') query:string){ 
        if(query){
            return this.getUsersService.getUsers().filter(u => u.gender === query);
        }
        return this.getUsersService.getUsers();

    }

    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id :number){
        console.log(typeof id, id);
        return this.getUserByIdService.getUserById(id);
    }
 
    @Post()
    createUsers(){
        const user = {id:3,name:'Deswal', age: 22, gender:'male',isMarried:false}
        return this.createUserService.createUsers(user);
    }

}