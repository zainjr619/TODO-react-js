import { type } from "os";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Tweet } from "./tweets";

@Entity({name:'users'})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
 
    @Column()
    age: number;

    @OneToMany(type=>Tweet,(Tweet)=>Tweet.user)
    tweets:Tweet;

}
