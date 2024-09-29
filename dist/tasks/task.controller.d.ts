import { TasksService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
export declare class TaskController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(query: any): any[];
    getTask(id: string): any;
    createTask(task: CreateTaskDto): CreateTaskDto;
    updateTask(task: UpdateTaskDto): string;
    deleteTask(): string;
    updateTaskStatus(): string;
}
