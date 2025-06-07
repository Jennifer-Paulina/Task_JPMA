import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
export declare class TasksService {
    private taskRepo;
    constructor(taskRepo: Repository<Task>);
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task | null>;
    create(body: any): Promise<Task>;
    update(id: number, body: any): Promise<Task>;
    remove(id: number): Promise<boolean>;
}
