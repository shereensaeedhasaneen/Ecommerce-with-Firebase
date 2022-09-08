import { observable, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import {GoogleAuthProvider , GithubAuthProvider , FacebookAuthProvider} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userId:string=''
  constructor(private afAuth:AngularFireAuth) {

   }


  signUp(email:string , password:string){

    return this.afAuth.createUserWithEmailAndPassword(email,password)
    // authState ==> if user logged in or not
  }

  Login(email:string , password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password)
  }

  Logout(){
    return this.afAuth.signOut()
  }

  check_If_Exist_User(){
      return this.afAuth.user
  }

  SignIn_With_Google(){
    return this.afAuth.signInWithPopup(new GoogleAuthProvider)
  }
}
