import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authenticated: boolean = false;

  constructor(public afAuth: AngularFireAuth){

  }

  ngOnInit(){
    if(this.afAuth.user._isScalar != false){
      this.authenticated = true;
    }else{
      this.authenticated = false;
    } 
    console.log(this.afAuth.user._isScalar);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(data =>{
      console.log(data);
      if(data.user != null){
        this.authenticated=true;
      }
    });
  }
  logout() {
    this.afAuth.auth.signOut().then(data => {
      this.authenticated = false;
    });
  }

  
}
