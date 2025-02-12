import { Injectable } from '@angular/core';
import { StatusTaskEnum } from '@shared/enums/status-task.enum';
import { TaskModel } from '@shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksApiMapperService {

  constructor() { }

  getAllTasksFromApi(tasksFromApi: any): TaskModel[] {
    return [
          {
            id: '1',
            status: StatusTaskEnum.completed,
            description: 'test desc',
            title: 'test title',
            completedBy: 'Milton',
            completedExpectedTime: 1739380662028,
            completedTime: 1739380662028
          },
          {
            id: '2',
            status: StatusTaskEnum.notcompleted,
            description: 'test desc 2',
            title: 'test title 2',
            completedBy: 'Milton',
            completedExpectedTime: 1739380662028,
            completedTime: 1739380662028
          }
        ];;
  }

  getTaskToSaveApi(task: TaskModel): TaskModel {
    return task;
  }
}
