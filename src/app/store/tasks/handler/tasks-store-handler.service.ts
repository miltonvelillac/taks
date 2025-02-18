import { Injectable, inject } from '@angular/core';
import { AddTaskModel } from '@shared/models/add-task.model';
import { TaskModel } from '@shared/models/task.model';
import { UserSessionStoreHandlerService } from '@store/user/handler/user-session-store-handler.service';
import { TasksStore } from '../reducer/tasks-store.reducer';
import { ActionInfoModel } from '@shared/models/action-info.model';
import { UserModel } from '@shared/models/user.model';
import { StatusTaskEnum } from '@shared/enums/status-task.enum';
import { TasksApiMapperService } from '@shared/mappers/apis/tasks/tasks-api-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class TasksStoreHandlerService {
  readonly store = inject(TasksStore);
  readonly user = inject(UserSessionStoreHandlerService);
  private tasksApiMapperService = inject(TasksApiMapperService);

  constructor() { }

  async loadAll(): Promise<TaskModel[]> {
    // The state of the `BooksStore` is unprotected from external modifications.
    // patchState(this.store, ({ books }) => ({ books: [...books, book] }));
    const loggedUser = this.user.getUser$();

    await this.store.loadAll({ loggedUser });
    return this.store.tasks();
  }

  async addTask(task: AddTaskModel): Promise<void> {
    const user = this.user.getUser$();
    const taskToApi = this.tasksApiMapperService.getTaskToSaveApi({ task, user });

    await this.store.add(taskToApi);
  }

  async updateTask(task: Partial<TaskModel>): Promise<void> {
    const user = this.user.getUser$();

    const taskToUpdate = this.tasksApiMapperService.getTaskToUpdateApi({ task, user });
    await this.store.update(taskToUpdate);
  }

  getTasks(): TaskModel[] {
    return this.store.sortedTasks();
  }

  getIsLoading(): boolean {
    return this.store.isLoading();
  }
}
