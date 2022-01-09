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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Task_1 = require("./entity/Task");
(0, typeorm_1.createConnection)({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "crud-demo",
    entities: [
        Task_1.Task
    ],
    synchronize: true,
    logging: false
}).then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    let task = new Task_1.Task();
    task.name = 'Task for test 2';
    yield connection.manager.save(task).then(t => {
        console.log('task created with id: ', t.id);
    });
    let tasks = yield connection.manager.find(Task_1.Task);
    console.log(tasks);
    // here you can start to work with your entities
})).catch(error => console.log(error));
