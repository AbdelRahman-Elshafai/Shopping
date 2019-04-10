import { Component, OnInit } from '@angular/core';
import { LogOutService } from 'src/app/services/Auth/log-out.service';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})
export class NavigationLinksComponent implements OnInit {
  loggedIn : boolean = false;
  email : string;
  constructor(private logOutService:LogOutService) { }

  ngOnInit() {
    if(localStorage.getItem('User')){      
      this.loggedIn = true;
      this.email = JSON.parse(localStorage.getItem('User')).email;
    }
    else{
      this.loggedIn = false;
    }

    this.logOutService.loggedIn.subscribe( () => {
      this.email = JSON.parse(localStorage.getItem('User')).email;
      this.loggedIn = true;
    });

    this.logOutService.loggedOut.subscribe( () => {
      this.loggedIn = false;
    });
    

  }


}
