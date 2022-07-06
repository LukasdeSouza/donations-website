import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponentComponent } from './pets-component/pets-component.component';



@NgModule({
  declarations: [
    PetsComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PetsComponentComponent
  ]
})
export class PetsModule { }
