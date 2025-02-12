import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RadioBtnComponent } from '@shared/components/radio-btns/radio-btn/radio-btn.component';
import { StatusTaskEnum } from '@shared/enums/status-task.enum';
import { RadioBtnOptionsModel } from '@shared/models/radio-btn-options.model';
import { TaskStatusPipe } from '@shared/pipes/task-status/task-status.pipe';

@Component({
  selector: 'app-status-options',
  imports: [RadioBtnComponent],
  templateUrl: './status-options.component.html',
  styleUrl: './status-options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TaskStatusPipe
  ]
})
export class StatusOptionsComponent {
  formField = input.required<FormControl>();

  taskStatusPipe = inject(TaskStatusPipe);

  getStatusOptions(): RadioBtnOptionsModel[] {
      return [
        {
          value: StatusTaskEnum.notcompleted as string,
          label: this.taskStatusPipe.transform(StatusTaskEnum.notcompleted)
        },
        {
          value: StatusTaskEnum.inProgress as string,
          label: this.taskStatusPipe.transform(StatusTaskEnum.inProgress)
        },
        {
          value: StatusTaskEnum.completed as string,
          label: this.taskStatusPipe.transform(StatusTaskEnum.completed)
        },
      ];
    };
    
}
