import { Resolver, Query, Args, Int } from "@nestjs/graphql";
import { User } from "../models/User";

@Resolver()
export class UserResolver{

  @Query((returns) => User)
  getUser(){
    return {
      id: 1,
      username: "username test",
      displayName:"display test"
    }
  }

  @Query((returns) => User)
  getOneUser(@Args('id',{
    type: ()=> Int
  }) id : number){

    const users = [
      {
        id: 1,
        username: "username test",
        displayName:"display test"
      },
      {
        id: 2,
        username: "username test 2",
        displayName:"display test 2"
      },
      {
        id: 3,
        username: "username test 3",
        displayName:"display test 3"
      },
    ]

    return users.filter((user) => user.id == id)[0]
  }

}