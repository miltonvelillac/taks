import { Injectable } from '@angular/core';
import { AddTaskModel } from '@shared/models/add-task.model';
import { TaskModel } from '@shared/models/task.model';
import { DateUtils } from '@shared/utils/dates/dates.utils';

@Injectable({
  providedIn: 'root'
})
export class TasksApiMapperService {

  constructor() { }

  getAllTasksFromApi(tasksFromApi: any[]): TaskModel[] {
    return tasksFromApi.map(task => ({
        id: task.id,
        collaborators: task.collaborators,
        createdBy: task.createdBy,
        description: task.description,
        expectedEndDate: task.expectedEndDate,
        expectedStartDate: task.expectedStartDate,
        title: task.title,
        status: task.status,
      } as TaskModel)
    );
  }

  getTaskToSaveApi(task: AddTaskModel): Partial<TaskModel> {
    const expectedStartDate = DateUtils.getDateTime({date: task.completedStartDate, time: task.completedStartTime});
    const expectedEndDate = DateUtils.getDateTime({date: task.completedEndDate, time: task.completedEndTime});

    return {
      title: task.title,
      description: task.description,
      expectedStartDate,
      expectedEndDate,
      collaborators: task.collaborators,
      createdBy: {
        user: {
          uid: task.createdBy.user.uid,
          email: task.createdBy.user.email
        },
      },
      status: task.status,
    };
  }

  getTaskToUpdateApi(task: TaskModel): Partial<TaskModel> {
    return task;
  }
}
