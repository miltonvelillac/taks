import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailBtnComponent } from '@shared/components/buttons/email-btn/email-btn.component';
import { GoogleBtnComponent } from '@shared/components/buttons/google-btn/google-btn.component';
import { LinkButtonComponent } from '@shared/components/buttons/link-button/link-button.component';
import { CardComponent } from '@shared/components/cards/card/card.component';
import { ErrorComponent } from '@shared/components/errors/error/error.component';
import { InputComponent } from '@shared/components/input/input.component';
import { LoginFormNamesEnum } from '@shared/enums/login-form-names.enum';
import { IdsConstant } from '@shared/ids/ids.constants';
import { LabelsText } from '@shared/text/labels.texts';
import { InputNames } from '@shared/utils/names/input.names';
import { RoutesUtils } from '@shared/utils/routes/routes.utils';
import { UserSessionStoreHandlerService } from '@store/user/handler/user-session-store-handler.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    GoogleBtnComponent,
    EmailBtnComponent,
    ErrorComponent,
    CardComponent,
    LinkButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private router = inject(Router);
  private userSessionStoreHandlerService = inject(UserSessionStoreHandlerService);
  private fb = inject(FormBuilder);

  formNames = LoginFormNamesEnum;
  names = InputNames;
  ids = IdsConstant.components.login();
  labels = LabelsText.login;

  form = this.fb.group({
    [this.formNames.user]: null,
    [this.formNames.password]: null,
  });

  errorMessage = signal('');

  getFormField(formNames: LoginFormNamesEnum): FormControl {
    return this.form.get(formNames) as FormControl;
  }

  async loginByEmail(): Promise<void> {
    this.errorMessage.set('');
    const email = this.form.get('user')?.value || '';
    const password = this.form.get('password')?.value || '';

    try {
      await this.userSessionStoreHandlerService.loginByEmail({ email, password });
      this.router.navigate([`/${RoutesUtils.main}`]);
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      this.errorMessage.set('Error de inicio de sesión');
    }
  }

  async loginWithGoogle(): Promise<void> {
    this.errorMessage.set('');
    try {
      await this.userSessionStoreHandlerService.loginGoogle();
      this.router.navigate([`/${RoutesUtils.main}`]);
    } catch (error) {
      console.error("Error en Google Sign-In:", error);
      this.errorMessage.set('Error en Google Sigh-In');
    }
  }

  signIn(): void {
    this.router.navigate([`/${RoutesUtils.signUp}`]);
  }
}
