import { Component, Input } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";
import { ValidarCamposService } from "../validar-campos.service";

@Component({
  selector: 'dio-input-text',
  templateUrl: './input-text.component.html'
})
export class InputTextComponent {

  constructor(public validator: ValidarCamposService) {}

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
