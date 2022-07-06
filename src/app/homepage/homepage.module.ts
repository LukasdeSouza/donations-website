import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModuleComponent } from './homepage-module/homepage-module.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomepageModuleComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports:[
    HomepageModuleComponent
  ]
})
export class HomepageModule { }
