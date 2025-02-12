import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { TaskResumeComponent } from '@features/task-resume/task-resume.component';
import { StatusTaskEnum } from '@shared/enums/status-task.enum';
import { TaskModel } from '@shared/models/task.model';

@Component({
  selector: 'app-task-list-page',
  imports: [TaskResumeComponent],
  templateUrl: './task-list-page.component.html',
  styleUrl: './task-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListPageComponent implements OnInit {
  tasks = signal<TaskModel[]>([]);

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    const tasks = [
      {
        id: '1',
        status: StatusTaskEnum.completed,
        description: 'test desc',
        title: 'test title',
        completedBy: 'Milton',
        completedExpectedTime: 1739380662028,
        completedTime: 1739380662028
      },
      {
        id: '2',
        status: StatusTaskEnum.notcompleted,
        description: 'test desc 2',
        title: 'test title 2',
        completedBy: 'Milton',
        completedExpectedTime: 1739380662028,
        completedTime: 1739380662028
      }
    ];

    this.tasks.set(tasks);
  }

  changeData(id: string = '1'): void {
    const tasks = this.tasks();
    const updatedTasks = tasks.map(task => {
      if(task.id === '1') {
        return {
          id: '1',
          status: StatusTaskEnum.inProgress,
          description: `test desc ${id}`,
          title: `test title ${id}`,
          completedBy: 'Milton',
          completedExpectedTime: 1739380662028,
          completedTime: 1739380662028
        }
      }
      return task;
    })
    this.tasks.update(
      prevTask => updatedTasks
    );
  }
}
