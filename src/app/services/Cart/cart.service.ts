import { Injectable, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  @Output() orderProduct:EventEmitter<Object> = new EventEmitter<Object>();
  @Output() removeProduct:EventEmitter<Number> = new EventEmitter<Number>();
  @Output() removeCartProduct:EventEmitter<Number> = new EventEmitter<Number>();

  addToCartCounter(productName:String , productPrice:Number , productId:Number){    
    
    this.orderProduct.emit(
      {
      "ProductName" : productName ,
      "ProductPrice" : productPrice,
      "ProductId": productId
      });
  }

  onRemovingProduct(productIndex:number){
    this.removeProduct.emit(productIndex);
  }

  onRemovingCartProduct(productIndex:number){
    
    this.removeCartProduct.emit(productIndex);
  }
}
