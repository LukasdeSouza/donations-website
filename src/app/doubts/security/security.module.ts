import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponentsComponent } from './security-components/security-components.component';



@NgModule({
  declarations: [
    SecurityComponentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SecurityComponentsComponent
  ]
})
export class SecurityModule { }
