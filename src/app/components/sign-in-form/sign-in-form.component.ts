import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  encapsulation:ViewEncapsulation.None

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
    if(this.signInForm.valid){
      const user = JSON.parse(localStorage.getItem('User')); 
      if(this.signInForm.value.email === user.email && this.signInForm.value.password === user.password){
        console.log("good");
        
      }
      else{
        console.log("bad");        
      }
    }
    
  }


}
