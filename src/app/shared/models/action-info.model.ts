import { StatusTaskEnum } from "@shared/enums/status-task.enum";
import { UserModel } from "./user.model";

export interface ActionInfoModel {
  user: UserModel;
  date?: number;
  status?: StatusTaskEnum;
}
