import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { InstitutionModule } from './institution/institution.module';
import { HomepageModule } from './homepage/homepage.module';
import { ChildsModule } from './childs/childs.module';
import { NewbornModule } from './newborn/newborn.module';
import { OldsModule } from './olds/olds.module';
import { PetsModule } from './pets/pets.module';
import { SocialprojectsModule } from './socialprojects/socialprojects.module';
import { DoubtsModule } from './doubts/doubts.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    InstitutionModule,
    HomepageModule,
    ChildsModule,
    NewbornModule,
    OldsModule,
    PetsModule,
    SocialprojectsModule,
    DoubtsModule,
    FooterModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
