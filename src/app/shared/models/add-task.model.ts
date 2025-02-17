export interface AddTaskModel {
  completedEndDate: Date;
  completedEndTime: Date;
  completedStartDate: Date;
  completedStartTime: Date;
  description: string;
  title: string;
  createdBy: {
    uid: string
  };
}
