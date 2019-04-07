import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/Products/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productsList : Product[];

  constructor(private productService:ProductsService) { }

  ngOnInit() {
    this.productService.get_products().subscribe((res) => {      
      this.productsList = res;
    });

    
  }

}
