import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  ModalController
} from '@ionic/angular/standalone';
import { ButtonComponent } from '@shared/components/buttons/button/button.component';
import { UserSessionModel } from '@shared/models/user-session.model';
import { RoutesUtils } from '@shared/utils/routes/routes.utils';
import { UserSessionStoreHandlerService } from '@store/user/handler/user-session-store-handler.service';
import { TextComponent } from "../../text/text.component";

@Component({
  selector: 'app-user-session-modal',
  templateUrl: './user-session-modal.component.html',
  styleUrls: ['./user-session-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    ButtonComponent,
    TextComponent,
]
})
export class UserSessionModalComponent implements OnInit {
  private router = inject(Router);
  private userSessionStoreHandlerService = inject(UserSessionStoreHandlerService);
  private modalCtrl = inject(ModalController);

  user = signal<UserSessionModel | null>(null);

  constructor() { }

  ngOnInit(): void {
    this.setUser();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async signOut(): Promise<void> {
    try {
      await this.userSessionStoreHandlerService.signOut();
      this.close();
      this.router.navigate([`/${RoutesUtils.login}`]);
    } catch (error) {
      console.error(error);
    }
  }

  private setUser(): void {
    const user = this.userSessionStoreHandlerService.getUser$();
    this.user.set(user);
  }

  private close(): void {
    this.modalCtrl.dismiss(null, 'close');
  }
}
