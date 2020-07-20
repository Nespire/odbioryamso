import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CrudService } from '../shared/crud.service';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listOfOrder: Item[] = [];
  listOfRMA: Item[] = [];

  constructor(
    private afs: AngularFirestore,
    private firebaseService: CrudService,
  ) {

  }
  ngOnInit() {
    this.firebaseService.getOrders().subscribe(data => {
      this.listOfOrder = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Item
      })
      console.log(this.listOfOrder)

    })
    this.firebaseService.getRMA().subscribe(data => {
      console.log(data);
      this.listOfRMA = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Item
      })
    })
    console.log(this.listOfRMA)


  }
  deleteOrder(id) {
    this.firebaseService.deleteOrder(id);
  }
  deleteRMA(id) {
    this.firebaseService.deleteRma(id);
  }
}
