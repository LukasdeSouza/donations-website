import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SocialprojectsComponentComponent } from './socialprojects-component/socialprojects-component.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    SocialprojectsComponentComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    FooterModule
  ],
  exports:[
    SocialprojectsComponentComponent
  ]
})
export class SocialprojectsModule { }
