import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsComponentComponent } from './donations-component/donations-component.component';



@NgModule({
  declarations: [
    DonationsComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DonationsComponentComponent
  ]
})
export class DonationsModule { }
