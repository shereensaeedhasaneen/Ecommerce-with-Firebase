import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:AngularFirestore) { }

  AddNewUser(id:any,name:string , address:string){
   return this.fs.doc('users/'+id).set({ // set data to document
      name:name,  // Or name (because propertyName == Value)
      address:address // Or address (because propertyName == Value)
    })
  }
}
