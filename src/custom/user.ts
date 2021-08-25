import { getRepository } from "typeorm";
import { Tweet } from "../entity/tweets";
import { User } from "../entity/User";
export const User1=async()=>{
    const userRepo =getRepository(User);
    const user=userRepo.create({firstName:"jutt",lastName:"saab",age:20});
    await userRepo.save(user).catch((err)=>{
        console.log("Error",err);
    });
    console.log("New user saved",user.id)


    const tweetRepo=getRepository(Tweet);
    const tweet=new Tweet();
     tweet.title="finally got job";
     tweet.content="well too soon";
     tweet.user=user; 

     await tweetRepo.save(tweet).catch((err)=>console.log(err));


}
export const find =async()=>{
    const userRepo = getRepository(User);
   try{
    const user : any = await userRepo.findOne({where:{firstName:"zain"}});
    if(user){
        console.log("User:",user, user.tweets)
       }
   }
   catch(e){
console.log(e);
   }


   
}