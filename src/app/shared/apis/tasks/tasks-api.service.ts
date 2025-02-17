import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { TaskModel } from '@shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {
  private firestore = inject(Firestore);
  private taskCollection = collection(this.firestore, 'tasks');

  constructor() { }

  async getAll(): Promise<void> {

  }

  async add(task: Partial<TaskModel>): Promise<TaskModel> {
    return addDoc(this.taskCollection, { ...task, createdAt: Date.now() }) as any;
  }

  async update(task: Partial<TaskModel>): Promise<TaskModel> {
    return task as any;
  }
}
