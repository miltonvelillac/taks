import { StatusTaskEnum } from "@shared/enums/status-task.enum";
import { ActionInfoModel } from "./action-info.model";

export interface AddTaskModel {
  completedEndDate: Date;
  completedEndTime: Date;
  completedStartDate: Date;
  completedStartTime: Date;
  createdBy: ActionInfoModel;
  collaboratorsEmail: string[];
  description: string;
  title: string;
  status: StatusTaskEnum;
}
