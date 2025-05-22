import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { GetUsersService } from "./getUsers.service";
import { GetUserByIdService } from "./getUserById.service";
import { CreateUserService } from "./createUser.service";

@Module({
    controllers: [UsersController],
    providers: [GetUsersService,GetUserByIdService,CreateUserService]
})

export class UsersModule{
    
}