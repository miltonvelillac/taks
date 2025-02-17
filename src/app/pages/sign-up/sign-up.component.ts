import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailBtnComponent } from '@shared/components/buttons/email-btn/email-btn.component';
import { GoogleBtnComponent } from '@shared/components/buttons/google-btn/google-btn.component';
import { LinkButtonComponent } from '@shared/components/buttons/link-button/link-button.component';
import { CardComponent } from '@shared/components/cards/card/card.component';
import { ErrorComponent } from '@shared/components/errors/error/error.component';
import { InputComponent } from '@shared/components/input/input.component';
import { SignUpFormNamesEnum } from '@shared/enums/sign-up-form-names.enum';
import { IdsConstant } from '@shared/ids/ids.constants';
import { LabelsText } from '@shared/text/labels.texts';
import { InputNames } from '@shared/utils/names/input.names';
import { RoutesUtils } from '@shared/utils/routes/routes.utils';
import { PasswordValidatorService } from '@shared/validators/form/password/password-validator.service';
import { UserSessionStoreHandlerService } from '@store/user/handler/user-session-store-handler.service';

@Component({
  selector: 'app-sign-in',
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
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  private router = inject(Router);
  private userSessionStoreHandlerService = inject(UserSessionStoreHandlerService);
  private passwordValidatorService = inject(PasswordValidatorService);
  private fb = inject(FormBuilder);

  formNames = SignUpFormNamesEnum;
  names = InputNames;
  ids = IdsConstant.components.signIn();
  labels = LabelsText.signUp;

  form = this.fb.group(
    {
      [this.formNames.user]: [null, [Validators.required, Validators.email]],
      [this.formNames.password]: [null, [Validators.required]],
      [this.formNames.repeatPassword]: [null, [Validators.required]],
    },
    {
      validators: [this.passwordValidatorService.repeatPassword(this.formNames.password, this.formNames.repeatPassword)]
    }
  );

  errorMessage = signal('');

  getFormField(formNames: SignUpFormNamesEnum): FormControl {
    return this.form.get(formNames) as FormControl;
  }

  async signUpByEmail(): Promise<void> {
    if(!this.form.valid) {
      this.handleInvalidForm();
      return;
    };
    this.errorMessage.set('');
    const email = this.form.get('user')?.value || '';
    const password = this.form.get('password')?.value || '';

    try {
      await this.userSessionStoreHandlerService.signUpByEmail({ email, password });
      this.router.navigate([`/${RoutesUtils.main}`]);
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      this.errorMessage.set('Error de inicio de sesión');
    }
  }

  async sighUpWithGoogle(): Promise<void> {
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
    this.router.navigate([`/${RoutesUtils.login}`]);
  }

  private handleInvalidForm(): void {
    console.log(this.form.errors, this.form.get(this.formNames.user)?.errors)
    
    const errorMessage = (this.form.errors as any)?.message;
    let errMessage = (this.form.get(this.formNames.user)?.errors as any)?.email ? 'Invalid email address' : undefined;
    errorMessage || errMessage && this.errorMessage.set(errorMessage || errMessage);
    this.form.markAllAsTouched();
  }
}
