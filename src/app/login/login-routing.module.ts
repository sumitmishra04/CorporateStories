import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from "./register-user/register-user.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

export const authLoginRoute: Routes = [
    {path: 'registeruser', component: RegisterUserComponent},
    {path: 'forgotpassword', component: ForgotPasswordComponent}
]

@NgModule({
    imports: [RouterModule.forChild(authLoginRoute)],
    exports: [RouterModule],

})

export class LoginRoutingModule {

}