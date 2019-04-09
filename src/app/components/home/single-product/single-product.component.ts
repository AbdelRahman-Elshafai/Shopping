import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input('singleProduct') product;
  constructor() { }

  ngOnInit() {
  }

  onOrder(productName , productPrice){
    console.log(productName);
    console.log(productPrice);
    
    
  }
}
