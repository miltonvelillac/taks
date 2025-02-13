import { Pipe, PipeTransform } from '@angular/core';
import { StatusTaskEnum } from '../../enums/status-task.enum';
import { LabelsText } from '@shared/text/labels.texts';

@Pipe({
  name: 'taskStatus',
  standalone: true,
})
export class TaskStatusPipe implements PipeTransform {

  transform(status: StatusTaskEnum): string {
    switch (status) {
      case StatusTaskEnum.completed:
        return LabelsText.status.completed;
      case StatusTaskEnum.inProgress:
        return LabelsText.status.inProgress;
    
      default:
        return LabelsText.status.notCompleted;
    }
  }

}
