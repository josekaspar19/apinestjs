"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getTasks() {
        return this.tasks;
    }
    getTask(id) {
        const taskFound = this.tasks.find(task => task.id === id);
        if (!taskFound) {
            return new common_1.NotFoundException(`Task with id ${id} not found`);
        }
        return taskFound;
    }
    createTask(task) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }
    updateTask(task) {
        console.log(task);
        return 'Actualizando tareas';
    }
    deleteTask() {
        return 'Eliminando tareas';
    }
    updateTaskStatus() {
        return 'Actualizar el Status de una tarea';
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=task.service.js.map