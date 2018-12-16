import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyARBt5yNQAuySGhBwB_1js1CKa0qLUmliw",
      authDomain: "http-angular-project-69a6b.firebaseapp.com"
    });
    
  }
}
