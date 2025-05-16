export class UsersService{
    users: {id:number,name:string,age:number,gender:string,isMarried: boolean} [] = [
        {id:1,name:'Shivam', age: 21, gender:'male',isMarried:false},
        {id:2,name:'Deswal', age: 21, gender:'male',isMarried:false},
        {id:2,name:'Shivani', age: 21, gender:'female',isMarried:false},
    ]

    getUsers(){
        return this.users;
    }

    getUserById(id:number){
        return this.users.find((user)=> user.id === id)
    }

    createUsers(user: {id:number,name:string,age:number,gender:string,isMarried: boolean}){
        this.users.push(user);
        return "User Created Successfully"
    }
}