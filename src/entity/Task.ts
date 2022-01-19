import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Task extends BaseEntity{
 
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    name!: string;

    @Column({
        nullable: true
    })
    created_at!: Date;

    @Column({
        nullable: true
    })
    updated_at!: Date;

    @Column({
        default: false,
        type: "boolean"
    })
    done!: boolean;


    @ManyToOne(() => User, user => user.tasks)
    user!: User;
}