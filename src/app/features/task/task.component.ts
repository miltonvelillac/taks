import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@shared/components/button/button.component';
import { RadioBtnComponent } from '@shared/components/radio-btns/radio-btn/radio-btn.component';
import { TextComponent } from '@shared/components/text/text.component';
import { StatusTaskEnum } from '@shared/enums/status-task.enum';
import { TaskFormNamesEnum } from '@shared/enums/task-form-names.enum';
import { RadioBtnOptionsModel } from '@shared/models/radio-btn-options.model';
import { TaskModel } from '@shared/models/task.model';
import { DateTimeModule } from '@shared/pipes/date-time/date-time.module';
import { TaskStatusPipe } from '@shared/pipes/task-status/task-status.pipe';
import { TaskLabelsEnum } from '../../shared/enums/task-labels.enum';
import { TasksStoreHandlerService } from '@store/tasks/handler/tasks-store-handler.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TaskStatusPipe,
    ButtonComponent,
    TextComponent,
    DateTimeModule,
    RadioBtnComponent,
  ],
})
export class TaskComponent {
  task = input.required<TaskModel>();

  tasksStoreHandlerService = inject(TasksStoreHandlerService);
  fb = inject(FormBuilder);
  form = this.createForm();

  labels = TaskLabelsEnum;
  formNames = TaskFormNamesEnum;

  setFormValues$ = effect(() => {
    if(!this.form) return;

    const status = this.task().status;
    const statusControl = this.getFormControl(TaskFormNamesEnum.status);
    statusControl.setValue(status);
  });

  getFormControl(controlName: TaskFormNamesEnum): FormControl {
    return this.form.get(controlName) as FormControl;
  }

  getStatusOptions(): RadioBtnOptionsModel[] {
    return [
      {
        value: StatusTaskEnum.notcompleted as string,
        label: StatusTaskEnum.notcompleted as string
      },
      {
        value: StatusTaskEnum.inProgress as string,
        label: StatusTaskEnum.inProgress as string
      },
      {
        value: StatusTaskEnum.completed as string,
        label: StatusTaskEnum.completed as string
      },
    ];
  };

  async save(): Promise<void> {
    if(!this.form.valid) return;
    const statusControl = this.getFormControl(this.formNames.status);
    const task: TaskModel = {...this.task(), status: statusControl.value};

    try {
      await this.tasksStoreHandlerService.updateTask(task);
      // this.tasksStoreHandlerService.loadAll();
    } catch (error) {
      
    }
  }



  private createForm(): FormGroup {
    return this.fb.group({
      status: []
    });
  }
}
