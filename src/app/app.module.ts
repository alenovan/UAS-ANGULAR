import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormatsDirective } from './input-formats.directive';
import { AuthGuard } from './auth.guard';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './registration/filter.pipe';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';



// import { CourseComponent } from './course/course.component';
// import { HiddenPropertyComponent } from './hidden-property/hidden-property.component';
// import { SwitchCaseComponent } from './switch-case/switch-case.component';
// import { NgforComponent } from './ngfor/ngfor.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
    FilterPipe,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
