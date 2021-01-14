import {Entity, Column, PrimaryColumn, BeforeInsert, BaseEntity} from "typeorm";
const { v4: uuidV4 } = require('uuid');
@Entity("users")
export class User extends BaseEntity{

    @PrimaryColumn("uuid")
    id: string;

    @Column("varchar", {length:255})
    email: string;

    @Column("text")
    password: string;


    @BeforeInsert()
    addId(){
        this.id = uuidV4()
    }

}
