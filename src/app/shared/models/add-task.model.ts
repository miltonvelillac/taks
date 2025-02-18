import { StatusTaskEnum } from "@shared/enums/status-task.enum";
import { ActionInfoModel } from "./action-info.model";
import { UserModel } from "./user.model";

export interface AddTaskModel {
  completedEndDate: Date;
  completedEndTime: Date;
  completedStartDate: Date;
  completedStartTime: Date;
  createdBy: ActionInfoModel;
  collaborators: UserModel[];
  description: string;
  title: string;
  status: StatusTaskEnum;
}
