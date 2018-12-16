import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { LoginPageComponent } from "./login/login-page.component";
import { UserComponent } from "./user/user.component";
import { AuthGuard } from "./login/auth-guard.service";

export const appRoute : Routes = [
    {path: '' , component:LoginPageComponent},
    {path: 'user' , component:UserComponent, canActivate: [AuthGuard]},
]

@NgModule({
imports:[RouterModule.forRoot(appRoute)],
exports:[RouterModule],

})

export class AppRoutingModule{}