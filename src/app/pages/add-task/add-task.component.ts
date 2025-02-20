import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@shared/components/buttons/button/button.component';
import { ChipGridComponent } from '@shared/components/chips/chip-grid/chip-grid.component';
import { DateRangeComponent } from '@shared/components/dates/date-range/date-range.component';
import { InputComponent } from '@shared/components/input/input.component';
import { TextAreaComponent } from '@shared/components/text-areas/text-area/text-area.component';
import { TimeComponent } from '@shared/components/times/time/time.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { AddTaskFormNamesEnum } from '@shared/enums/add-task-form-names.enum';
import { IdsConstant } from '@shared/ids/ids.constants';
import { AddTaskModel } from '@shared/models/add-task.model';
import { LabelsText } from '@shared/text/labels.texts';
import { InputNames } from '@shared/utils/names/input.names';
import { TaskRules } from '@shared/utils/rules/task.rules';
import { TasksStoreHandlerService } from '@store/tasks/handler/tasks-store-handler.service';

@Component({
  selector: 'app-add-task',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    DateRangeComponent,
    TextAreaComponent,
    TimeComponent,
    TitleComponent,
    ButtonComponent,
    ChipGridComponent,
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent {

  tasksStoreHandlerService = inject(TasksStoreHandlerService);
  fb = inject(FormBuilder);
  form = this.createForm();

  formNames = AddTaskFormNamesEnum;
  labels = LabelsText.addTask;
  ids = IdsConstant.components.addTask();
  names = InputNames;

  readonly taskMaxLength = TaskRules.descriptionMaxLength;

  getFormField(formNames: AddTaskFormNamesEnum): FormControl {
    return this.form.get(formNames) as FormControl;
  }

  submit(): void {
    if (!this.form.valid) return;

    const task = this.form.getRawValue() as AddTaskModel;
    this.tasksStoreHandlerService.addTask(task);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      [AddTaskFormNamesEnum.title]: [
        null,
        [Validators.required]
      ],
      [AddTaskFormNamesEnum.description]: [
        null,
        [Validators.required, Validators.maxLength(this.taskMaxLength)]
      ],
      [AddTaskFormNamesEnum.completedStartDate]: [
        null,
        [Validators.required]
      ],
      [AddTaskFormNamesEnum.completedEndDate]: [
        null,
        [Validators.required]
      ],
      [AddTaskFormNamesEnum.completedStartTime]: [
        null,
        [Validators.required]
      ],
      [AddTaskFormNamesEnum.completedEndTime]: [
        null,
        [Validators.required]
      ],
      [AddTaskFormNamesEnum.collaboratorsEmail]: [
        null,
      ],
    });
  }
}
