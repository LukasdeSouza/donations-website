import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';



@NgModule({
  declarations: [
    RegistrationComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RegistrationComponentComponent
  ]
})
export class RegistrationModule { }
