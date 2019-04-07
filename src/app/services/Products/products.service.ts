import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  products : Product[];
  url = "https://gist.githubusercontent.com/AbdelRahman-Elshafai/8d0add8341dc607c7ac9ab8a8065bfec/raw/ae88f9ba7999d8f5d81570777ff33a717ecb2aef/products.json";
  constructor(private httpClient:HttpClient) { }
  
  get_products(){
    return this.httpClient.get<Product[]>(this.url).pipe(
      map( (res : Product[]) => {
        return this.products = res.map((product:any) => {          
          return <Product>{
            id : product.Id,
            productId: product.ProductId,
            description: product.Description,
            name: product.Name,
            productPicUrl: product.ProductPicUrl,
            quantity: product.Quantity,
            price: product.Price
          }          
        })        
      })
    );         
  }

  get_product(id : number){
    console.log(this.products);
    
  }
}
