import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { LabelsText } from '@shared/text/labels.texts';
import { RegexUtils } from '@shared/utils/regex/regex';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {

  constructor() { }

  validEmailList(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailList = control?.value || [];
      if (emailList.length === 0) return null;

      const invalidEmails: string[] = emailList.filter((email: string) => !RegexUtils.isValidEmail(email)) || [];

      if (invalidEmails.length === 0) return null;

      const invalidEmailsText = invalidEmails.join(',');
      return { message: `${LabelsText.validators.email.invalid}: ${invalidEmailsText}` };
    };
  }
}
