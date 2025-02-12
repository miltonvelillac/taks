import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconStatusClassEnum } from '@shared/enums/icon-status-class.enum';
import { IconsEnum } from '@shared/enums/icons.enum';
import { StatusTaskEnum } from '@shared/enums/status-task.enum';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-icon-status',
  imports: [CommonModule, IconComponent],
  templateUrl: './icon-status.component.html',
  styleUrl: './icon-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconStatusComponent {
  status = input<StatusTaskEnum>();

  statusClass = computed(() => {
    return this.getStatusClass();
  });

  statusIcon = computed(() => {
    return this.getStatusIcon()
  });


  private getStatusIcon(): string {
    switch (this.status()) {
      case StatusTaskEnum.completed:
        return IconsEnum.completed;
      case StatusTaskEnum.inProgress:
        return IconsEnum.inProgress;
      default:
        return IconsEnum.notCompleted;
    }
  }

  private getStatusClass(): string {
    switch (this.status()) {
      case StatusTaskEnum.completed:
        return IconStatusClassEnum.completed;
      case StatusTaskEnum.inProgress:
        return IconStatusClassEnum.inProgress;
      default:
        return IconStatusClassEnum.notCompleted;
    }
  }
}
