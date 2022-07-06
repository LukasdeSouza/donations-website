import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';



@NgModule({
  declarations: [
    AboutUsComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutUsComponentComponent
  ]
})
export class AboutUsModule { }
