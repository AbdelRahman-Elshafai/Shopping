import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/Cart/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  productList: any[] = [];
  constructor(private cartService:CartService) { }

  ngOnInit() {
    if(localStorage.getItem('Products')){
      this.productList = JSON.parse(localStorage.getItem('Products')).slice();
    }
  }

  onRemove(index){
    this.productList[index].ProductCount--;
    if(this.productList[index].ProductCount < 1){
      this.productList.splice(index , 1);
    }
    localStorage.setItem('Products' , JSON.stringify(this.productList));
    this.cartService.onRemovingProduct(index);
  }

}
