import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() {}

  ngOnInit(): void {}

  share(product: Product): void {
    console.log('shared click' + JSON.stringify(product));
  }

  onNotify(): void {
    alert('click on notify event');
  }
}
