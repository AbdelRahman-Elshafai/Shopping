import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogOutService } from 'src/app/services/Auth/log-out.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class SignInFormComponent implements OnInit {
  signInForm : FormGroup;
  constructor(private router:Router , private logOutService:LogOutService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email' : new FormControl(null , [Validators.required , Validators.email]),
      'password': new FormControl(null , [Validators.required , Validators.minLength(6)]),
    });
  }

  onLogin(){
    if(this.signInForm.valid){
      localStorage.setItem('User' , JSON.stringify({
        'email' : this.signInForm.value.email ,
        'password' : this.signInForm.value.password
      })); 
      this.router.navigate(['/home']);

      this.logOutService.onLoggingIn();
    }
    
  }


}
