import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildsComponentComponent } from './childs/childs-component/childs-component.component';
import { AboutUsComponentComponent } from './doubts/about-us/about-us-component/about-us-component.component';
import { DonationsComponentComponent } from './doubts/donations/donations-component/donations-component.component';
import { RegistrationComponentComponent } from './doubts/registration/registration-component/registration-component.component';
import { SecurityComponentsComponent } from './doubts/security/security-components/security-components.component';
import { WorkWithUsComponentComponent } from './doubts/work-with-us/work-with-us-component/work-with-us-component.component';
import { HomepageModuleComponent } from './homepage/homepage-module/homepage-module.component';
import { InstitutionComponentComponent } from './institution/institution-component/institution-component.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { NewbornComponentComponent } from './newborn/newborn-component/newborn-component.component';
import { OldsComponentComponent } from './olds/olds-component/olds-component.component';
import { PetsComponentComponent } from './pets/pets-component/pets-component.component';
import { SocialprojectsComponentComponent } from './socialprojects/socialprojects-component/socialprojects-component.component';


const routes: Routes = [
  {
    path:'home', component: HomepageModuleComponent
  },
  {
    path: 'institution', component: InstitutionComponentComponent
  },
  {
    path: 'socialprojects', component: SocialprojectsComponentComponent
  },
  {
    path: 'childs', component: ChildsComponentComponent
  },
  {
    path: 'olds', component: OldsComponentComponent
  },
  {
    path: 'newborn', component: NewbornComponentComponent
  },
  {
    path: 'pets', component: PetsComponentComponent
  },
  {
    path: 'doubts/donations', component: DonationsComponentComponent
  },
  {
    path: 'doubts/registration', component: RegistrationComponentComponent
  },
  {
    path: 'doubts/security', component: SecurityComponentsComponent
  },
  {
    path: 'doubts/about-us', component: AboutUsComponentComponent
  },
  {
    path: 'doubts/work-with-us', component: WorkWithUsComponentComponent
  },
  {
    path: 'login', component: LoginComponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
