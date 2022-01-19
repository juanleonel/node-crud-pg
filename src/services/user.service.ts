import { use } from 'passport';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { ICrud } from './crud.interface';
 
export class UserService implements ICrud<User> {

    public constructor() {
    }

    public async getAll(): Promise<Array<User>> {
        try { 
            const userRepository = getRepository(User);
            return await userRepository.find(); 
        } catch (error) {
            throw new Error("Can not saved the data. " + error);
        }
    }
    public async save(user: User): Promise<User> {
        try {
            const userRepository = getRepository(User);
            let exist = await this.getByEmail(user.email);
            
            if (exist){
                return exist;
            }
            
            user = await userRepository.save(user);
            return user;
        } catch (error) {
            throw new Error("Can not saved the data. " + error);
        }
    }

    public async delete(id: number | string): Promise<boolean> {
        try {
            if (!id) { return false;}

            const userRepository = getRepository(User);
            let task = await userRepository.findOne(id);
            if(!task){ return false; }

            let result = await userRepository.delete(task);
            return result.affected! > 0;
        } catch (error) {
            throw new Error("Can not saved the data. " + error);
        }
    }

    public async getById(id: number | string): Promise<User> {
        try {
            const userRepository = getRepository(User);
            let user = await userRepository.findOne(id);
            return user!;
        } catch (error) {
            throw new Error("Can not saved the data. " + error);
        }
    }

    public async getByEmail(email: string): Promise<User> {
        try {
            const userRepository = getRepository(User);
            let userExist = await userRepository.findOne({ where: { email: email } });
            return (userExist!);
        } catch (error) {
            throw new Error("Can not saved the data. " + error);
        }
    }
}