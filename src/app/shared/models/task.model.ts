import { StatusTaskEnum } from "@shared/enums/status-task.enum";
import { ActionInfoModel } from "./action-info.model";
import { UserModel } from "./user.model";

export interface TaskModel {
  id: string;
  title: string;
  description: string;
  status: StatusTaskEnum;
  expectedStartDate: number;
  expectedEndDate: number;
  completedTime: number;
  comments: string;
  createdBy: ActionInfoModel;
  collaborators: UserModel[];
  completedBy: ActionInfoModel;
  updatedBy: ActionInfoModel[];
}
