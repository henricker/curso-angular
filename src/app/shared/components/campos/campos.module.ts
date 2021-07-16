import { InputSelectComponent } from './input-select/input-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../material/material.module";
import { InputTextComponent } from "./input-text/input-text.component";
import { InputDateComponent } from './input-date/input-date.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    InputTextComponent,
    InputDateComponent,
    InputTextareaComponent,
    InputNumberComponent,
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ] ,
  exports: [
    InputTextComponent,
    InputDateComponent,
    InputTextareaComponent,
    InputNumberComponent,
    InputSelectComponent
  ]
})
export class CamposModule {

}
