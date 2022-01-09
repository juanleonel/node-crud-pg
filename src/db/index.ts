import "reflect-metadata";
import { createConnection } from "typeorm";
import { Task } from "../entity/Task";
import { User } from "../entity/User";

export const connectionDB = async () => {
    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "root",
        database: "crud-demo",
        entities: [
            Task,
            User
        ],
        synchronize: true,
        logging: false
    })
};
// .then( async connection => {
//     let task = new Task()

//     task.name = 'Task for test 2';
//     await connection.manager.save(task).then(t => {
//         console.log('task created with id: ', t.id);
//     });

//     let tasks = await connection.manager.find(Task);
//     console.log(tasks);
    
//     // here you can start to work with your entities
// }).catch(error => console.log(error)); 