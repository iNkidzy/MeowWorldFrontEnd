import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../shared/models/product';
import {ProductService} from '../shared/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Products: Product[];
  errormessage: '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
       products => {
         this.Products = products;
        },
       error => {
         this.errormessage = error.message;
       });
  }
}
