import { Injectable, inject } from '@angular/core';
import { AddTaskModel } from '@shared/models/add-task.model';
import { TaskModel } from '@shared/models/task.model';
import { UserSessionStoreHandlerService } from '@store/user/handler/user-session-store-handler.service';
import { TasksStore } from '../reducer/tasks-store.reducer';
import { ActionInfoModel } from '@shared/models/action-info.model';
import { UserModel } from '@shared/models/user.model';

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
    const createdBy: ActionInfoModel = { user: { uid: user?.uid, email: user?.email || '' } };
    const collaborators: UserModel[] = [{ email: user?.email || '' }];

    await this.store.add({ ...book, createdBy, collaborators });
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
