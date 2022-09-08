import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afAuth:AngularFireAuth) { }

  signUp(email:string , password:string){

    return this.afAuth.createUserWithEmailAndPassword(email,password)
    // authState ==> if user logged in or not
  }
}
