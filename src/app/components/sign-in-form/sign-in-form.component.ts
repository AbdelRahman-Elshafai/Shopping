import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      'email' : new FormControl(null , [Validators.required , Validators.email]),
      'password': new FormControl(null , [Validators.required , Validators.minLength(6)]),
    });
  }

  onLogin(){
    
    console.log(JSON.parse(localStorage.getItem('User')));
    
  }


}
