import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input('type') typeInput;
  @Input('id') idInput;
  @Input('placeholder') placeholderInput;
  @Input('control') formControlInput:FormControl;
  @Input('group') groupInput:FormGroup;


  constructor() { }

  ngOnInit() {
  }

}
