import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogOutService } from 'src/app/services/Auth/log-out.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SignUpFormComponent implements OnInit {
  
  signUpForm : FormGroup;
  constructor(private router:Router , private logOutService:LogOutService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username' : new FormControl(null , Validators.required),
      'email' : new FormControl(null , [Validators.required , Validators.email]),
      'password' : new FormControl(null , [Validators.required , Validators.minLength(6)]),
    });
  }

  onRegister(){
    if(this.signUpForm.valid){
      localStorage.setItem('User' , JSON.stringify({
        'email' : this.signUpForm.value.email ,
        'password' : this.signUpForm.value.password
      })); 
      this.router.navigate(['/home']);
      this.logOutService.onLoggingIn();
    }
  }


}
