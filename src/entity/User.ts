import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Task } from "./Task";

@Entity()
export class User extends BaseEntity{
 
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
        nullable: false,
        length: 200,
        type: 'varchar',
        unique: true
    })
    email!: string;

    @Column({
        nullable: false,
        length: 150,
        type: 'varchar'
    })
    password!: string;

    @OneToMany(() => Task, task => task.user)
    tasks!: Task[];
}