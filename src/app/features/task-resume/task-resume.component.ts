import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TaskComponent } from '@features/task/task.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { ExpansionPanelComponent } from '@shared/components/expansion-panel/expansion-panel.component';
import { IconStatusComponent } from '@shared/components/icon-status/icon-status.component';
import { TaskModel } from '@shared/models/task.model';

@Component({
  selector: 'app-task-resume',
  imports: [
    ExpansionPanelComponent,
    TaskComponent,
    IconStatusComponent,
    TitleComponent,
  ],
  templateUrl: './task-resume.component.html',
  styleUrl: './task-resume.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskResumeComponent {
  task = input.required<TaskModel>();
}