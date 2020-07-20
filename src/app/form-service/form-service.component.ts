import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.scss']
})
export class FormServiceComponent implements OnInit {
   validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value)
    this.firebaseService.createRma(this.validateForm.value);
    this.router.navigateByUrl('/main');
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
  }
}