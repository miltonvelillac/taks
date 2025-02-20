import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LabelsText } from '@shared/text/labels.texts';
import { RoutesUtils } from '@shared/utils/routes/routes.utils';
import { UserSessionStoreHandlerService } from '@store/user/handler/user-session-store-handler.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  private router = inject(Router);
  private userSessionStoreHandlerService = inject(UserSessionStoreHandlerService);
  
  labels = LabelsText.menu;

  goToToday(): void {
    
  }

  goToTasks(): void {
    this.router.navigate([`/${RoutesUtils.tasks}`]);
  }

  goToAddTask(): void {
    this.router.navigate([`/${RoutesUtils.addTasks}`]);
  }

  async signOut(): Promise<void> {
    try {
      await this.userSessionStoreHandlerService.signOut();
      this.router.navigate([`/${RoutesUtils.login}`]);
    } catch (error) {
      console.error(error);
    }
  }
}
