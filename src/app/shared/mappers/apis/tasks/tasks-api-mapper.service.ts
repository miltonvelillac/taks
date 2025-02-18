import { Injectable } from '@angular/core';
import { ActionInfoModel } from '@shared/models/action-info.model';
import { AddTaskModel } from '@shared/models/add-task.model';
import { TaskModel } from '@shared/models/task.model';
import { UserSessionModel } from '@shared/models/user-session.model';
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
      comments: task.comments,
      updatedBy: task.updatedBy,
    } as TaskModel)
    );
  }

  getTaskToSaveApi(props: { task: AddTaskModel, user: UserSessionModel | null }): Partial<TaskModel> {
    const { task, user } = props;
    const createdBy: ActionInfoModel = { user: { uid: user?.uid, email: user?.email || '' } };
    const collaboratorsEmail: string[] = [user?.email || '', ...task.collaboratorsEmail];
    const collaborators = collaboratorsEmail.map(email => ({ email }));
    const expectedStartDate = DateUtils.getDateTime({ date: task.completedStartDate, time: task.completedStartTime });
    const expectedEndDate = DateUtils.getDateTime({ date: task.completedEndDate, time: task.completedEndTime });

    return {
      title: task.title,
      description: task.description,
      expectedStartDate,
      expectedEndDate,
      collaborators,
      createdBy,
      status: task.status,
    };
  }

  getTaskToUpdateApi(props: { task: Partial<TaskModel>, user: UserSessionModel | null }): Partial<TaskModel> {
    const { task, user } = props;
    const updatedBy: ActionInfoModel = { user: { uid: user?.uid, email: user?.email || '' }, date: new Date().getTime(), status: task.status, comments: task.comments };

    return {
      id: task.id,
      status: task.status,
      comments: task.comments,
      updatedBy: [...task.updatedBy || [], updatedBy],
    };
  }
}
