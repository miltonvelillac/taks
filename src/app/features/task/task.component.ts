import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusOptionsComponent } from '@features/status-options/status-options.component';
import { ButtonComponent } from '@shared/components/buttons/button/button.component';
import { ChipGridComponent } from '@shared/components/chips/chip-grid/chip-grid.component';
import { LabelComponent } from '@shared/components/label/label.component';
import { TextAreaComponent } from '@shared/components/text-areas/text-area/text-area.component';
import { TextComponent } from '@shared/components/text/text.component';
import { TaskFormNamesEnum } from '@shared/enums/task-form-names.enum';
import { IdsConstant } from '@shared/ids/ids.constants';
import { TaskModel } from '@shared/models/task.model';
import { UpdateTaskModel } from '@shared/models/update-task.model';
import { DateTimeModule } from '@shared/pipes/date-time/date-time.module';
import { TaskStatusPipe } from '@shared/pipes/task-status/task-status.pipe';
import { LabelsText } from '@shared/text/labels.texts';
import { InputNames } from '@shared/utils/names/input.names';
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
    TextAreaComponent,
    ChipGridComponent,
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
  names = InputNames;

  setFormValues$ = effect(() => {
    if(!this.form) return;

    const status = this.task().status;
    const comments = this.task().comments;
    const collaborators = this.task().collaborators;
    
    const statusControl = this.getFormControl(TaskFormNamesEnum.status);
    const commentstrol = this.getFormControl(TaskFormNamesEnum.comments);
    const collaboratorsControl = this.getFormControl(TaskFormNamesEnum.collaborators);

    statusControl.setValue(status);
    commentstrol.setValue(comments);

    if(collaborators?.length > 0) {
      const collEmail = collaborators.map(cl => cl.email);
      collaboratorsControl.setValue(collEmail);
    }
  });

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setIds();
  }

  getFormControl(controlName: TaskFormNamesEnum): FormControl {
    return this.form.get(controlName) as FormControl;
  }

  getCollaboratorsEmail(): string[] {
    console.log(this.task().collaborators?.map(coll => coll.email))
    const collaboratorsControl = this.getFormControl(TaskFormNamesEnum.collaborators);
    return collaboratorsControl.value || [];
  }

  async save(): Promise<void> {
    if(!this.form.valid) return;
    const statusControl = this.getFormControl(this.formNames.status);
    const commentControl = this.getFormControl(this.formNames.comments);
    const collaboratorsControl = this.getFormControl(this.formNames.collaborators);
    
    const task: UpdateTaskModel = {
      id: this.task().id,
      status: statusControl.value,
      comments: commentControl.value,
      collaboratorsEmail: collaboratorsControl.value,
      updatedBy: this.task().updatedBy,
    };

    try {
      await this.tasksStoreHandlerService.updateTask(task);
      this.tasksStoreHandlerService.loadAll();
    } catch (error) {
      console.error(error);
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      [TaskFormNamesEnum.status]: [],
      [TaskFormNamesEnum.comments]: [],
      [TaskFormNamesEnum.collaborators]: [],
    });
  }

  private setIds(): void {
    this.ids = IdsConstant.components.task(this.task().id);
  }
}
