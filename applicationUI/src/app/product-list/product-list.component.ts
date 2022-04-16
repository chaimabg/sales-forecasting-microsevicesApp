import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  headers = [
    'Product Name',
    'Product id',
    'Store',
    'Description',
    'Sales',
    '  Action '
  ];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    }, error => {
      console.log(error);
    });

  }

}
