import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authServie: AuthService) { }
  invalidForm = false;

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    if(form.status === 'INVALID'){
      this.invalidForm = true;
    }
    else{
      this.invalidForm = false;
    }
   // this.authServie.registerUser(form.value.email , form.value.password);

    this.authServie.loginUser(form.value.email , form.value.password);
    // this.authServie.resetPassword('mishrasumit042@gmail.com');
    form.reset();
  }
  clicked(){
    alert('cs')
  }
}
