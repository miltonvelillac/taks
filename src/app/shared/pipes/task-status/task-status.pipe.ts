import { Pipe, PipeTransform } from '@angular/core';
import { StatusTaskEnum } from '../../enums/status-task.enum';

@Pipe({
  name: 'taskStatus',
  standalone: true,
})
export class TaskStatusPipe implements PipeTransform {

  transform(status: StatusTaskEnum): string {
    return status === StatusTaskEnum.completed ? 'Completed' : 'Not Completed';
  }

}
