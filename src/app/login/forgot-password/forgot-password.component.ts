import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private authService : AuthService; private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    if(f.valid){
      this.authService.resetPassword(f.value.email).then(() => {
        console.log('email sent');
        this.router.navigate(['/'])
      })
      .catch(error => console.log(error));;
    }
  }

}
