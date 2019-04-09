import { Injectable, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  @Output() orderProduct:EventEmitter<Object> = new EventEmitter<Object>();

  addToCartCounter(productName:String , productPrice:Number , productId:Number){    
    
    this.orderProduct.emit(
      {
      "ProductName" : productName ,
      "ProductPrice" : productPrice,
      "ProductId": productId
      });
  }

  storeProducts(){

  }
}
