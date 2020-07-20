import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLinkDelayModule } from '@bcodes/ngx-routerlink-delay';
import { CrudService } from '../shared/crud.service';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  validateForm!: FormGroup;
  model: Item;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
    this.firebaseService.createOrder(this.validateForm.value);

    this.router.navigateByUrl('/main');

  }

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private firebaseService: CrudService,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      number: [null, [Validators.required]],
      decision: [null, [Validators.required]]
    });
  }
}