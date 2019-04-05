import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  url = "http://localhost:4200/home";

  private products:Product[] = [
    {
      id: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      image : "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      amount: 10,
      price : 956
    },
    {
      id: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      image : "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      amount: 10,
      price : 956
    },
    {
      id: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      image : "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      amount: 10,
      price : 956
    },
    {
      id: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      image : "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      amount: 10,
      price : 956
    },
    {
      id: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      image : "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      amount: 10,
      price : 956
    },
    {
      id: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      image : "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      amount: 10,
      price : 956
    },
    {
      id: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      image : "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      amount: 10,
      price : 956
    },
    {
      id: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      image : "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      amount: 10,
      price : 956
    },
    {
      id: "HT-1000",
      name: "Notebook Basic 15",
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      image : "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      amount: 10,
      price : 956
    }
  ];
  constructor(private httpClient:HttpClient) { }

  post_product(){
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', this.products).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }
}
