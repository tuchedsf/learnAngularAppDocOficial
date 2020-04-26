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
    window.alert('shared click' + JSON.stringify(product));
  }

  onNotify(): void {
    window.alert('click on notify event');
  }
}
