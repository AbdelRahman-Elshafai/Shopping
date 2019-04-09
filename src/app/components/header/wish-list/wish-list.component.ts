import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  productList : [] = [];
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('Products')){
      this.productList = JSON.parse(localStorage.getItem('Products')).slice();
    }
  }

  onRemove(index){
    console.log(this.productList);
    
    console.log(index);
        
  }

}
