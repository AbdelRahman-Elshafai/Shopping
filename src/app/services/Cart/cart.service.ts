import { Injectable, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  @Output() orderProduct:EventEmitter<String> = new EventEmitter<String>();

  addToCartCounter(productName:String){
    this.orderProduct.emit(productName);
  }
}
