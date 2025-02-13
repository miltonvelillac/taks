import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailBtnComponent } from '@shared/components/buttons/email-btn/email-btn.component';
import { GoogleBtnComponent } from '@shared/components/buttons/google-btn/google-btn.component';
import { CardComponent } from '@shared/components/cards/card/card.component';
import { ErrorComponent } from '@shared/components/errors/error/error.component';
import { InputComponent } from '@shared/components/input/input.component';
import { LoginFormNamesEnum } from '@shared/enums/login-form-names.enum';
import { IdsConstant } from '@shared/ids/ids.constants';
import { LabelsText } from '@shared/text/labels.texts';
import { InputNames } from '@shared/utils/names/input.names';

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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private auth = inject(Auth);
  private router = inject(Router);

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
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      console.log("Usuario autenticado:", result.user);
      this.router.navigate(['/tasks']);
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      this.errorMessage.set('Error de inicio de sesión');
    }
  }

  async loginWithGoogle(): Promise<void> {
    this.errorMessage.set('');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      console.log("Usuario autenticado:", result.user);
      this.router.navigate(['/tasks']);
    } catch (error) {
      console.error("Error en Google Sign-In:", error);
      this.errorMessage.set('Error en Google Sigh-In');
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}
