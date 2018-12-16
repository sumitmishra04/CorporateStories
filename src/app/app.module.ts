import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './login/auth-guard.service';
import { ParallaxDirective } from './parallax.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ParallaxDirective
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
