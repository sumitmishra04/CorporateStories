import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginPageComponent } from './login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
    declarations: [
      RegisterUserComponent,
      LoginPageComponent,
      ForgotPasswordComponent,
    ],
    imports: [
      CommonModule,
      FormsModule,
      LoginRoutingModule
    ],
    providers: []
  })
  export class LoginModule { }