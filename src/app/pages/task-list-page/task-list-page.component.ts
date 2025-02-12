import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { TaskResumeComponent } from '@features/task-resume/task-resume.component';
import { TasksStoreHandlerService } from '@store/tasks/handler/tasks-store-handler.service';

@Component({
  selector: 'app-task-list-page',
  imports: [TaskResumeComponent],
  templateUrl: './task-list-page.component.html',
  styleUrl: './task-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListPageComponent implements OnInit {
  tasksStoreHandlerService = inject(TasksStoreHandlerService);

  tasks$ = computed(() => this.tasksStoreHandlerService.getTasks());

  ngOnInit(): void {
    this.getTasks();
  }

  async getTasks(): Promise<void> {
    try {
      await this.tasksStoreHandlerService.loadAll();
    } catch (error) {
      console.error(error);
    }
  }

}
