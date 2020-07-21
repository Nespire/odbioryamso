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
  i=1;
  x=1;
  countOrder;countRMA;
  ngOnInit() {
   
    this.firebaseService.getOrders().subscribe(data => {
      this.listOfOrder = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Item
      }) 
      this.countOrder=this.listOfOrder.length;
      /*
      setInterval(() => {
        this.listOfOrder.forEach(element => {
          let now=new Date();
          let secounds,minutes;
          secounds=now.getUTCSeconds();
          minutes=now.getUTCMinutes();

          this.i=secounds;
          this.x=minutes;

          console.log(now.getUTCMinutes())
          console.log(now.getUTCSeconds())
  
          console.log(element.date);
        });      }, 1000);
      */
    })
    this.firebaseService.getRMA().subscribe(data => {
      this.listOfRMA = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Item
      })
      this.countRMA=this.listOfRMA.length;

    })


  }
  deleteOrder(id) {
    this.firebaseService.deleteOrder(id);
  }
  deleteRMA(id) {
    this.firebaseService.deleteRma(id);
  }
}
