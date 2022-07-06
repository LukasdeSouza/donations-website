import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildsComponentComponent } from './childs-component/childs-component.component';



@NgModule({
  declarations: [
    ChildsComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChildsComponentComponent
  ]
})
export class ChildsModule { }
