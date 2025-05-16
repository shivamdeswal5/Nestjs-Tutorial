import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
        return 'Get Request to to get all users'
    }

    @Post()
    createUsers(){
        return 'A new user has been created'
    }

}