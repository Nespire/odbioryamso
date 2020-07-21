import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.scss']
})
export class FormServiceComponent implements OnInit {
   validateForm!: FormGroup;
   model: Item;
   now: Date = new Date();
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.model = {
      number: this.validateForm.value.number,
      decision: this.validateForm.value.decision,
      date: this.now
    }
    console.log(this.model)

    this.firebaseService.createRma(this.model);
    this.router.navigateByUrl('/end');
  }

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private firebaseService: CrudService,
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      number: [null, [Validators.required]],
      decision: [null,[Validators.required]]
    });
    setTimeout(() => {
      this.router.navigateByUrl('/startpage');
    }, 30000);
  }
}