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
exports.TaskService = void 0;
const typeorm_1 = require("typeorm");
const Task_1 = require("../entity/Task");
class TaskService {
    constructor() {
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskRepository = (0, typeorm_1.getRepository)(Task_1.Task);
                return yield taskRepository.find();
            }
            catch (error) {
                throw new Error("Can not saved the data" + error);
            }
        });
    }
    save(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskRepository = (0, typeorm_1.getRepository)(Task_1.Task);
                task = yield taskRepository.save(task);
                return task;
            }
            catch (error) {
                throw new Error("Can not saved the data" + error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    return false;
                }
                const taskRepository = (0, typeorm_1.getRepository)(Task_1.Task);
                let task = yield taskRepository.findOne(id);
                if (!task) {
                    return false;
                }
                let result = yield taskRepository.delete(task);
                return result.affected > 0;
            }
            catch (error) {
                throw new Error("Can not saved the data" + error);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskRepository = (0, typeorm_1.getRepository)(Task_1.Task);
                let task = yield taskRepository.findOne(id);
                return task;
            }
            catch (error) {
                throw new Error("Can not saved the data" + error);
            }
        });
    }
}
exports.TaskService = TaskService;
