import { Injectable } from '@angular/core';
import { TaskModel } from '@shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  constructor() { }

  async getAll(): Promise<void> {

  }

  async add(task: TaskModel): Promise<TaskModel> {
    return task;
  }

  async update(task: TaskModel): Promise<TaskModel> {
    return task;
  }
}
