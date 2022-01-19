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
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTask = exports.getTasks = void 0;
const task_service_1 = require("../services/task.service");
const taskService = new task_service_1.TaskService();
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield taskService.getAll();
    let response = {
        data: tasks,
        message: 'DATA RECIBED',
        status: true
    };
    return res.status(200).json(response);
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let task = yield taskService.getById(parseInt(req.params.id));
    let response = {
        data: task,
        message: 'DATA RECIBED',
        status: true
    };
    return res.status(200).json(response);
});
exports.getTask = getTask;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let task = req.body;
    taskService.save(task);
    let response = {
        data: task,
        message: 'DATA SAVED',
        status: true
    };
    return res.status(200).json(response);
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id, name, done } = req.body;
    let response = {
        data: name,
        message: 'DATA UPDATED',
        status: true
    };
    return res.status(200).json(response);
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let task = req.body;
    let response = {
        data: task,
        message: 'DATA UPDATED',
        status: true
    };
    return res.status(200).json(response);
});
exports.deleteTask = deleteTask;
