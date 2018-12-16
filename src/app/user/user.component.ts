import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userInfo;
  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.userInfo = this.authService.getUserInfo();
   console.log(this.userInfo);
  }

  logout(){

    this.authService.logout();
  }
}
