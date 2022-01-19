"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_route_1 = __importDefault(require("../routes/task.route"));
const authpath_router_1 = __importDefault(require("./authpath.router"));
const routes = (0, express_1.Router)();
routes.use('/api/tasks', task_route_1.default);
routes.use('/api/auth', authpath_router_1.default);
exports.default = routes;
