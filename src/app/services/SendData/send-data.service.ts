import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  url = "http://localhost:4200/home";
  constructor(private httpClient:HttpClient) { }

  post_product(){

  }
}
