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

  product : Product = null;
  constructor(private route : ActivatedRoute ,
              private productService:ProductsService) { }

  ngOnInit() {
    this.productService.get_product(this.route.snapshot.params['id']).subscribe( (res) => {
      this.product = res;            
    });
    
  }

}
