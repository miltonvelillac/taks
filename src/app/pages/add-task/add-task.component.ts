import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@shared/components/buttons/button/button.component';
import { ChipGridComponent } from '@shared/components/chips/chip-grid/chip-grid.component';
import { DateComponent } from '@shared/components/dates/date/date.component';
import { InputComponent } from '@shared/components/input/input.component';
import { TextAreaComponent } from '@shared/components/text-areas/text-area/text-area.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { AddTaskFormNamesEnum } from '@shared/enums/add-task-form-names.enum';
import { IdsConstant } from '@shared/ids/ids.constants';
import { AddTaskModel } from '@shared/models/add-task.model';
import { LabelsText } from '@shared/text/labels.texts';
import { InputNames } from '@shared/utils/names/input.names';
import { TaskRules } from '@shared/utils/rules/task.rules';
import { TasksStoreHandlerService } from '@store/tasks/handler/tasks-store-handler.service';
import { LabelComponent } from "../../shared/components/label/label.component";

@Component({
  selector: 'app-add-task',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    DateComponent,
    TextAreaComponent,
    TitleComponent,
    ButtonComponent,
    ChipGridComponent,
    LabelComponent,
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
      [AddTaskFormNamesEnum.date]: [
        new Date().toISOString(),
        [Validators.required]
      ],
      [AddTaskFormNamesEnum.collaboratorsEmail]: [
        null,
      ],
    });
  }
}
