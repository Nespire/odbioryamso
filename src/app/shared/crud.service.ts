import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../interfaces/item';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(public db: AngularFirestore) { }

  getOrders() {
    return this.db.collection('order').snapshotChanges();
  }
  getRMA() {
    return this.db.collection('rma').snapshotChanges();
  }
  createOrder(item: Item) {
    return this.db.collection('order').add(item);
  }
  createRma(item: Item) {
    return this.db.collection('rma').add(item);
  }
  deleteOrder(id:string) {
    this.db.doc('order/' + id).delete();
  }
  deleteRma(id:string) {
    this.db.doc('rma/' + id).delete();
  }
}
