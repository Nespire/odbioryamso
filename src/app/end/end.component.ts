import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  goToHome(){
    this.router.navigateByUrl('/end');
  }

  constructor(public router: Router) { }

  ngOnInit() {

    setTimeout(
      this.goToHome
    , 2000);
  }
}
