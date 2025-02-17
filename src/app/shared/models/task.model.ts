import { StatusTaskEnum } from "@shared/enums/status-task.enum";

export interface TaskModel {
  id: string;
  title: string;
  description: string;
  status: StatusTaskEnum;
  expectedStartDate: number;
  expectedEndDate: number;
  completedTime: number;
  comments: string;
  createdBy: {
    uid: string;
  };
  completedBy: {
    uid: string;
    date: number;
  };
  updateddBy: [
    {
      uid: string;
      date: number;
      status: StatusTaskEnum;
    }
  ];
}
