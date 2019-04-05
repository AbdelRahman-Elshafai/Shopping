import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input('for') forInput;
  @Input('label') labelValueInput;
  @Input('type') typeInput;
  @Input('id') idInput;
  @Input('placeholder') placeholderInput;


  constructor() { }

  ngOnInit() {
  }

}
