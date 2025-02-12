import { Injectable, inject } from '@angular/core';
import { TasksStore } from '../reducer/tasks-store.reducer';
import { TaskModel } from '@shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksStoreHandlerService {
  readonly store = inject(TasksStore);

  constructor() { }

  async loadAll(): Promise<TaskModel[]> {
    // The state of the `BooksStore` is unprotected from external modifications.
    // patchState(this.store, ({ books }) => ({ books: [...books, book] }));

    await this.store.loadAll();
    return this.store.tasks();
  }

  async addTask(book: TaskModel): Promise<void> {
    await this.store.add(book);
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
