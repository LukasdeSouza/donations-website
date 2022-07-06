import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkWithUsComponentComponent } from './work-with-us-component/work-with-us-component.component';



@NgModule({
  declarations: [
    WorkWithUsComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WorkWithUsComponentComponent
  ]
})
export class WorkWithUsModule { }
