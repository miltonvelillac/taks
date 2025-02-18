import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query, where } from '@angular/fire/firestore';
import { TaskModel } from '@shared/models/task.model';
import { UserSessionModel } from '@shared/models/user-session.model';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {
  private firestore = inject(Firestore);
  private taskCollection = collection(this.firestore, 'tasks');

  constructor() { }

  async getAll(params: {loggedUser: UserSessionModel | null}): Promise<any[]> {
    const tasksQuery = query(this.taskCollection, where('collaborators', 'array-contains', { email: params.loggedUser?.email || '' }));
    const querySnapshot = await getDocs(tasksQuery);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async add(task: Partial<TaskModel>): Promise<TaskModel> {
    return addDoc(this.taskCollection, { ...task, createdAt: Date.now() }) as any;
  }

  async update(task: Partial<TaskModel>): Promise<TaskModel> {
    return task as any;
  }
}
