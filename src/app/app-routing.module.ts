import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{
path: '',
component: LoginComponent
},
{
path: 'friend',
component: RegistrationComponent
}
,
{
path: 'contact',
component: ContactComponent
},
{
path: 'home',
component: HomeComponent
},
{
path: 'login',
component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
