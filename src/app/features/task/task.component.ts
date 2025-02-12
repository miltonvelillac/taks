import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StatusTaskEnum } from '../../shared/enums/status-task.enum';
import { TaskLabelsEnum } from '../../shared/enums/task-labels.enum';
import { TaskStatusPipe } from '@shared/pipes/task-status/task-status.pipe';
import { ButtonComponent } from '@shared/components/button/button.component';
import { TextComponent } from '@shared/components/text/text.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TaskStatusPipe, ButtonComponent, TextComponent],
})
export class TaskComponent {

  title = input.required<string>();
  description = input.required<string>();
  status = input<StatusTaskEnum>(StatusTaskEnum.notcompleted);
  completedExpectedTime = input<Date>();
  completedBy = input<string>();
  completedTime = input<Date>();

  labels = TaskLabelsEnum;
}
