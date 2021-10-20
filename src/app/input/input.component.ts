import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  // input with type control
  @Input() control!: FormControl | any;

  constructor() { }

  ngOnInit(): void {
  }

}
