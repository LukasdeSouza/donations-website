import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldsComponentComponent } from './olds-component/olds-component.component';



@NgModule({
  declarations: [
    OldsComponentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    OldsComponentComponent
  ]
})
export class OldsModule { }
