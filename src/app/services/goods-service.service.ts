import { Igoods } from 'src/app/models/igoods';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoodsServiceService {

  constructor(private fs:AngularFirestore) { }
  getAllGoods(){
    return this.fs.collection('goods').snapshotChanges()
}
  }

