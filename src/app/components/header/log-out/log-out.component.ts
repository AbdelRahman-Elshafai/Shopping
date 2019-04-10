import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutService } from 'src/app/services/Auth/log-out.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(private router : Router , private logOutService:LogOutService) { }

  ngOnInit() {

  }

  onLogOut(){
    if(localStorage.getItem('User')){
      localStorage.removeItem('User');
      this.router.navigate(['/home']);
    }
    this.logOutService.onLoggingOut();
  }

}
