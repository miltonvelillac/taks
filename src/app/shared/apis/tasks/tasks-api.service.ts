import { inject, Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { TaskModel } from '@shared/models/task.model';
import { UserSessionModel } from '@shared/models/user-session.model';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {
  readonly db = 'tasks';
  private firestore = inject(Firestore);
  private taskCollection = collection(this.firestore, this.db);

  constructor() { }

  async getAll(params: {loggedUser: UserSessionModel | null}): Promise<any[]> {
    const tasksQuery = query(this.taskCollection, where('collaborators', 'array-contains', { email: params.loggedUser?.email || '' }));
    const querySnapshot = await getDocs(tasksQuery);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async add(task: Partial<TaskModel>): Promise<TaskModel> {
    console.log(task)
    return await addDoc(this.taskCollection, { ...task, createdAt: Date.now() }) as any;
  }

  async update(task: Partial<TaskModel>): Promise<void> {
    const taskRef = doc(this.firestore, `${this.db}/${task.id}`);
    return await updateDoc(taskRef, task);
  }
}
