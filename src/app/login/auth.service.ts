import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  constructor(private router: Router) { }

  registerUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error))
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
            this.router.navigate(['user'])
          });
      })
      .catch(error => console.log(error));
  }

  getToken() {
    return firebase.auth().currentUser.getIdToken().then((token: string) => {
      this.token = token
    });
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut().then(() => this.router.navigate(['/']));
    this.token = null;
  }

  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email);
  }

  getUserInfo() {
    const user = firebase.auth().currentUser;
    let userInfo = { 'name': '', 'email': '', 'photoUrl': '', 'emailVerified': false, 'uid': '' };
    let name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      userInfo.name = user.displayName;
      userInfo.email = user.email;
      userInfo.photoUrl = user.photoURL;
      userInfo.emailVerified = user.emailVerified;
      userInfo.uid = user.uid;
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
    }
    return userInfo;
  }
}
