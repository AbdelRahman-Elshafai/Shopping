import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  signInForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email' : new FormControl(null),
      'password': new FormControl(null),
    });
  }


}
