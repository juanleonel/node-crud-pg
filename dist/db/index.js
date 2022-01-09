"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDB = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Task_1 = require("../entity/Task");
const User_1 = require("../entity/User");
const connectionDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "root",
        database: "crud-demo",
        entities: [
            Task_1.Task,
            User_1.User
        ],
        synchronize: true,
        logging: false
    });
});
exports.connectionDB = connectionDB;
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
