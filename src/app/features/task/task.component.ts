import { ChangeDetectionStrategy, Component, effect, inject, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusOptionsComponent } from '@features/status-options/status-options.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { LabelComponent } from '@shared/components/label/label.component';
import { TextComponent } from '@shared/components/text/text.component';
import { TaskFormNamesEnum } from '@shared/enums/task-form-names.enum';
import { IdsConstant } from '@shared/ids/ids.constants';
import { TaskModel } from '@shared/models/task.model';
import { DateTimeModule } from '@shared/pipes/date-time/date-time.module';
import { TaskStatusPipe } from '@shared/pipes/task-status/task-status.pipe';
import { LabelsText } from '@shared/text/labels.texts';
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
    StatusOptionsComponent,
    LabelComponent,
  ],
})
export class TaskComponent implements OnInit {
  task = input.required<TaskModel>();

  tasksStoreHandlerService = inject(TasksStoreHandlerService);
  fb = inject(FormBuilder);
  form = this.createForm();

  formNames = TaskFormNamesEnum;
  labels = LabelsText.task;
  ids = IdsConstant.components.task();

  setFormValues$ = effect(() => {
    if(!this.form) return;

    const status = this.task().status;
    const statusControl = this.getFormControl(TaskFormNamesEnum.status);
    statusControl.setValue(status);
  });

  constructor() {}

  ngOnInit(): void {
    this.setIds();
  }

  getFormControl(controlName: TaskFormNamesEnum): FormControl {
    return this.form.get(controlName) as FormControl;
  }

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

  private setIds(): void {
    this.ids = IdsConstant.components.task(this.task().id);
  }
}
