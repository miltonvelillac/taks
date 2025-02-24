import { StatusTaskEnum } from "@shared/enums/status-task.enum";
import { ActionInfoModel } from "./action-info.model";

export interface AddTaskModel {
  createdBy: ActionInfoModel;
  collaboratorsEmail: string[];
  date: string;
  description: string;
  title: string;
  status: StatusTaskEnum;
}
