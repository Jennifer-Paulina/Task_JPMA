import { TasksService } from '../services/tasks.service';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAll(): Promise<import("../entities/task.entity").Task[]>;
    getOne(id: number): Promise<import("../entities/task.entity").Task | null>;
    create(body: any): Promise<import("../entities/task.entity").Task>;
    update(id: number, body: any): Promise<import("../entities/task.entity").Task>;
    delete(id: number): Promise<boolean>;
}
