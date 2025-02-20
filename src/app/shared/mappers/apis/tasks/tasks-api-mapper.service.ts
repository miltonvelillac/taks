import { Injectable } from '@angular/core';
import { StatusTaskEnum } from '@shared/enums/status-task.enum';
import { ActionInfoModel } from '@shared/models/action-info.model';
import { AddTaskModel } from '@shared/models/add-task.model';
import { TaskModel } from '@shared/models/task.model';
import { UpdateTaskModel } from '@shared/models/update-task.model';
import { UserSessionModel } from '@shared/models/user-session.model';
import { UserModel } from '@shared/models/user.model';
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
    const collaborators = this.getCollaborators({ user: user, collEmails: task.collaboratorsEmail });
    const expectedStartDate = DateUtils.getDateTime({ date: task.completedStartDate, time: task.completedStartTime });
    const expectedEndDate = DateUtils.getDateTime({ date: task.completedEndDate, time: task.completedEndTime });

    return {
      title: task.title,
      description: task.description,
      expectedStartDate,
      expectedEndDate,
      collaborators,
      createdBy,
      status: task.status || StatusTaskEnum.notcompleted,
    };
  }

  getTaskToUpdateApi(props: { task: UpdateTaskModel, user: UserSessionModel | null }): Partial<TaskModel> {
    const { task, user } = props;
    const updatedBy: ActionInfoModel = { user: { uid: user?.uid, email: user?.email || '' }, date: new Date().getTime(), status: task.status, comments: task.comments || '' };
    const collaborators = this.getCollaborators({ user: user, collEmails: task.collaboratorsEmail });

    return {
      id: task.id,
      collaborators,
      comments: task.comments || '',
      status: task.status,
      updatedBy: [...task.updatedBy || [], updatedBy],
    };
  }

  private getCollaborators(props: { user: UserSessionModel | null, collEmails?: string[] }): UserModel[] {
    const { user, collEmails } = props;
    const collaboratorsEmail: any = {};

    for (const email of [user?.email || '', ...collEmails || []]) {
      if (!email) continue;
      collaboratorsEmail[email] = email;
    }

    const keysEmail = Object.keys(collaboratorsEmail);

    return keysEmail?.map(email => ({ email })) || [];
  }
}
