import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  
  signUpForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username' : new FormControl(null , Validators.required),
      'email' : new FormControl(null , [Validators.required , Validators.email]),
      'password' : new FormControl(null , [Validators.required , Validators.minLength(6)]),
      // 'password_confirmation' : new FormControl(null , [Validators.required , Validators.minLength(6)]),
    });
  }

  onRegister(){
    if(this.signUpForm.valid){
      
      localStorage.setItem('User' , JSON.stringify({'email' : this.signUpForm.value.email , 'password' : this.signUpForm.value.password}) );    
    }
  }


}
