import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm = new FormGroup({
    // validators.required - value must be present
    name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(/\s/)]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    // regex: look @ beginning - match 0 (followed by 1-9) OR 1 (followed by 1-2) ... {d} -> makes sure we get 2 numbers (as opposed to letters) at end ($)
    expiration: new DateFormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/) ]),
    securityCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submitted!")
  }

}
