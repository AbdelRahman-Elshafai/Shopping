import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  url = "https://gist.githubusercontent.com/AbdelRahman-Elshafai/8d0add8341dc607c7ac9ab8a8065bfec/raw/ae88f9ba7999d8f5d81570777ff33a717ecb2aef/products.json";
  constructor(private httpClient:HttpClient) { }

  get_products(){
 
    return this.httpClient.get(this.url).subscribe(
      (res) => {
        
        console.log(res);
      }
    );
  }
}
