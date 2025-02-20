import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { LabelsText } from '@shared/text/labels.texts';
import { RoutesUtils } from '@shared/utils/routes/routes.utils';
import { ButtonComponent } from '../buttons/button/button.component';
import { UserSessionModalService } from '../modals/user-session-modal/service/user-session-modal.service';

@Component({
  selector: 'app-menu',
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    ButtonComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  private router = inject(Router);
  private userSessionModalService = inject(UserSessionModalService);

  labels = LabelsText.menu;

  goToTasks(): void {
    this.router.navigate([`/${RoutesUtils.tasks}`]);
  }

  goToAddTask(): void {
    this.router.navigate([`/${RoutesUtils.addTasks}`]);
  }

  async openUser(): Promise<void> {
    this.userSessionModalService.open();
  }
}
