import { Pipe, PipeTransform } from '@angular/core';
import { StatusTaskEnum } from '../../enums/status-task.enum';

@Pipe({
  name: 'taskStatus',
  standalone: true,
})
export class TaskStatusPipe implements PipeTransform {

  transform(status: StatusTaskEnum): string {
    switch (status) {
      case StatusTaskEnum.completed:
        return 'Completed';
      case StatusTaskEnum.inProgress:
        return 'In Progress';
    
      default:
        return 'Not Completed';
    }
  }

}
