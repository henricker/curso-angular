import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  hasErrorValidator(control: AbstractControl, errorName: string) {
    if( (control.dirty || control.touched) && this.hasError(control, errorName)) {
      return true;
    }
    return false;
  }

  hasError(control: AbstractControl, errorName: string) {
    return control.hasError(errorName);
  }

  lengthValidator(control: AbstractControl, errorName: string) {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }

}
