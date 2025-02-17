import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { LabelsText } from '@shared/text/labels.texts';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  constructor() { }

  repeatPassword(passwordFormName: string, repeatPasswordFormName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(passwordFormName)?.value;
      const repeatPassword = control.get(repeatPasswordFormName)?.value;
      if (!password && !repeatPassword) return null;
    
      return password === repeatPassword ? null : { message: LabelsText.validators.password.repeat };
    };
  }
}
