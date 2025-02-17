import { Injectable, inject } from '@angular/core';
import { AddTaskModel } from '@shared/models/add-task.model';
import { TaskModel } from '@shared/models/task.model';
import { UserSessionStoreHandlerService } from '@store/user/handler/user-session-store-handler.service';
import { TasksStore } from '../reducer/tasks-store.reducer';

@Injectable({
  providedIn: 'root'
})
export class TasksStoreHandlerService {
  readonly store = inject(TasksStore);
  readonly user = inject(UserSessionStoreHandlerService);

  constructor() { }

  async loadAll(): Promise<TaskModel[]> {
    // The state of the `BooksStore` is unprotected from external modifications.
    // patchState(this.store, ({ books }) => ({ books: [...books, book] }));

    await this.store.loadAll();
    return this.store.tasks();
  }

  async addTask(book: AddTaskModel): Promise<void> {
    const user = this.user.getUser$();

    await this.store.add({ ...book, createdBy: { uid: user?.uid || '' } });
  }

  async updateTask(book: TaskModel): Promise<void> {
    await this.store.update(book);
  }

  getTasks(): TaskModel[] {
    return this.store.sortedTasks();
  }

  getIsLoading(): boolean {
    return this.store.isLoading();
  }
}
