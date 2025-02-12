import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { TaskComponent } from '@features/task/task.component';

@Component({
  selector: 'app-task-resume',
  imports: [MatExpansionModule, TaskComponent],
  templateUrl: './task-resume.component.html',
  styleUrl: './task-resume.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskResumeComponent {
  readonly panelOpenState = signal(false);
}