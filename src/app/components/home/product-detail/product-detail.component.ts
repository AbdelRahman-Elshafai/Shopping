import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/Products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : Product;
  constructor(private route : ActivatedRoute ,
              private productService:ProductsService) { }

  ngOnInit() {
    this.product = this.route.snapshot.params['id'];
    // console.log(this.product);
    this.productService.get_product(1);
    
  }

}
