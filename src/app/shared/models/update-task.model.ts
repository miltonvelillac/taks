import { StatusTaskEnum } from "@shared/enums/status-task.enum";
import { ActionInfoModel } from "./action-info.model";

export interface UpdateTaskModel {
  id: string;
  status: StatusTaskEnum;
  comments: string;
  collaboratorsEmail: string[];
  updatedBy: ActionInfoModel[];
}
