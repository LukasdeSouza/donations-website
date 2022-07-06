import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsModule } from './about-us/about-us.module';
import { DonationsModule } from './donations/donations.module';
import { RegistrationModule } from './registration/registration.module';
import { SecurityModule } from './security/security.module';
import { WorkWithUsModule } from './work-with-us/work-with-us.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutUsModule,
    DonationsModule,
    RegistrationModule,
    SecurityModule,
    WorkWithUsModule
  ]
})
export class DoubtsModule { }
