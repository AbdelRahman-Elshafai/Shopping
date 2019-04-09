import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/Cart/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input('singleProduct') product;
  constructor(private cartService:CartService) { }

  ngOnInit() {
  }

  onOrder(productName:String , productPrice:Number){    
    this.cartService.addToCartCounter(productName , productPrice);
  }
}
