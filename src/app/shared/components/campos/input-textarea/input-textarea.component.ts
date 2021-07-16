import { AbstractControl, FormGroup } from '@angular/forms';
import { Component, Input } from "@angular/core";
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-textarea' ,
  templateUrl: './input-textarea.component.html'
})
export class InputTextareaComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validator: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
