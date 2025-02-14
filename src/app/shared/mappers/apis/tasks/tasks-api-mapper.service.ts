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
            completedTime: 1739380662028,
            comments: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
          },
          {
            id: '2',
            status: StatusTaskEnum.notcompleted,
            description: 'test desc 2',
            title: 'test title 2',
            completedBy: 'Milton',
            completedExpectedTime: 1739380662028,
            completedTime: 1739380662028,
            comments: ''
          },
          {
            id: '3',
            status: StatusTaskEnum.inProgress,
            description: 'test desc 3',
            title: 'test title 3',
            completedBy: 'Milton',
            completedExpectedTime: 1739380662028,
            completedTime: 1739380662028,
            comments: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
          }
        ];
  }

  getTaskToSaveApi(task: TaskModel): TaskModel {
    return task;
  }
}
