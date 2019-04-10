import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})
export class NavigationLinksComponent implements OnInit {
  loggedIn : boolean = false;
  email : string;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('User')){
      
      this.loggedIn = true;
      this.email = JSON.parse(localStorage.getItem('User')).email;
      console.log(this.email);
    }
    else{
      this.loggedIn = false;
    }
    

  }


}
