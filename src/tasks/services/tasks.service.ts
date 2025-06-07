import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task) private taskRepo: Repository<Task>
    ) { }

    findAll() {
        return this.taskRepo.find();
    }

    findOne(id: number) {
        return this.taskRepo.findOne({ where: { id } });
    }

    create(body: any) {
        const newTask = new Task();
        newTask.name = body.name;
        return this.taskRepo.save(newTask);
    }
    async update(id: number, body: any) {
        const task = await this.taskRepo.findOne({ where: { id } });
        if (!task) {
            throw new Error(`Task with id ${id} not found`);
        }
        this.taskRepo.merge(task, body);
        return this.taskRepo.save(task);
    }

    async remove(id: number) {
        await this.taskRepo.delete(id);
        return true;
    }
}
