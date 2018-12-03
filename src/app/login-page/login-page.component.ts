import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }
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
    console.log(form.value.email + ' ' + form.value.password);
    form.reset();
  }
  clicked(){
    alert('cs')
  }
}
