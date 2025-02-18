import { inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { TasksApiService } from '@shared/apis/tasks/tasks-api.service';
import { TasksApiMapperService } from '@shared/mappers/apis/tasks/tasks-api-mapper.service';
import { TaskModel } from '@shared/models/task.model';
import { UserSessionModel } from '@shared/models/user-session.model';
import { TaskStoreSelectorsService } from '../selectors/tasks-store-selectors.service';

type TasksState = {
  tasks: TaskModel[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const TasksStore = signalStore(
  // 👇 Providing `TasksStore` at the root level.
  { providedIn: 'root' },
  // By default, SignalStore's state is protected from external modifications, ensuring a consistent and predictable data flow. This is the recommended approach. However, external updates to the state can be enabled by setting the protectedState option to false when creating a SignalStore.
  // { protectedState: false },
  withState(initialState),
  withComputed(
    (
      { tasks, filter },
      taskStoreSelectorsService = inject(TaskStoreSelectorsService)
    ) => ({
      sortedTasks: taskStoreSelectorsService.sortedTasks(tasks, filter),
    })
  ),
  withMethods((store, tasksApiService = inject(TasksApiService), tasksApiMapperService = inject(TasksApiMapperService)) => ({
    updateQuery(query: string): void {
      // 👇 Updating state using the `patchState` function.
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({ filter: { ...state.filter, order } }));
    },

    async loadAll(params: {loggedUser: UserSessionModel | null}): Promise<void> {
      patchState(store, { isLoading: true });

      const tasksFromApi = await tasksApiService.getAll({ loggedUser: params.loggedUser });
      const tasks = tasksApiMapperService.getAllTasksFromApi(tasksFromApi);
      patchState(store, { tasks, isLoading: false });
    },

    async add(task: Partial<TaskModel>): Promise<void> {
      patchState(store, { isLoading: true });
      const addedTask = await tasksApiService.add(task);

      patchState(store, {
        tasks: [...store.tasks(), addedTask],
        isLoading: false,
      });
    },

    async update(task: Partial<TaskModel>): Promise<void> {
      patchState(store, { isLoading: true });
      await tasksApiService.update(task);

      patchState(store, {
        isLoading: false,
      });
    },
  }))
);
