import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionComponentComponent } from './institution-component/institution-component.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { FooterModule } from '../footer/footer.module';




@NgModule({
  declarations: [
    InstitutionComponentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatIconModule,
    FooterModule
  ],
  exports:[
    InstitutionComponentComponent
  ]
})
export class InstitutionModule { }
