import { ActionInfoModel } from "./action-info.model";
import { UserModel } from "./user.model";

export interface AddTaskModel {
  completedEndDate: Date;
  completedEndTime: Date;
  completedStartDate: Date;
  completedStartTime: Date;
  description: string;
  title: string;
  createdBy: ActionInfoModel;
  collaborators: UserModel[];
}
