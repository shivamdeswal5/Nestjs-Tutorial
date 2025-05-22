import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { GetUsersService } from "./getUsers.service";
import { GetUserByIdService } from "./getUserById.service";
import { CreateUserService } from "./createUser.service";

function createConnection() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "CONNECTED",
      });
    }, 3000);
  });
}

@Module({
    controllers: [UsersController],
    providers: [GetUsersService,GetUserByIdService,CreateUserService,{
        provide: 'DATABASE_CONNECTION',
        useFactory : async ()=>{
            const connection = await createConnection();
            return connection;
        }
    }]
})

export class UsersModule{
    
}