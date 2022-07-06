import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewbornComponentComponent } from './newborn-component/newborn-component.component';



@NgModule({
  declarations: [
    NewbornComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NewbornComponentComponent
  ]
})
export class NewbornModule { }
