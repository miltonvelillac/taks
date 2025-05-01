import { computed, Signal, Injectable } from '@angular/core';
import { FilterModel } from '@shared/models/filter.model';
import { TaskModel } from '@shared/models/task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskStoreSelectorsService {
  sortedTasks = (tasks: Signal<TaskModel[]>, filter: FilterModel) => {
    return computed(() => {
      const direction = filter.order() === 'asc' ? 1 : -1;

      return tasks();
    });
  };
  getLoading = (isLoading: Signal<boolean>) => {
    return computed(() => {
      return isLoading();
    });
  };
}
