import { StatusTaskEnum } from "@shared/enums/status-task.enum";

export interface TaskModel {
  id: string;
  title: string;
  description: string;
  status: StatusTaskEnum;
  completedExpectedTime: number;
  completedBy: string;
  completedTime: number;
}
