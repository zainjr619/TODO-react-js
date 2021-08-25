import { type } from "os";
import { join } from "path";
import { Column, Entity,JoinColumn,ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
@Entity({name:"tweets"})
export class Tweet{
    @PrimaryGeneratedColumn("uuid")
    id:number;

    @Column({type:"varchar",length :80})
    title:string;
    @Column ({type:"varchar",length:300})
    content : string;

   @JoinColumn({name:"userId"})
   @ManyToOne(type=>User, user=>user.tweets)
    user:User;
}