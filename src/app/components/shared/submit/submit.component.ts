import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  @Input('value') valueInput; 
  constructor() { }

  ngOnInit() {
  }

}
