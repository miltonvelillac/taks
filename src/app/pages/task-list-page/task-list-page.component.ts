import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskResumeComponent } from '@features/task-resume/task-resume.component';

@Component({
  selector: 'app-task-list-page',
  imports: [TaskResumeComponent],
  templateUrl: './task-list-page.component.html',
  styleUrl: './task-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListPageComponent {

}
