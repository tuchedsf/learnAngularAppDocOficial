import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private router: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      //(params) => (this.product = products[+params.get('productId')])
      (params) => (this.product = products[+params.get('productId') - 1])
    );
    console.log(this.product);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert('This product: ' + product.name + ' adicionado com sucesso');
  }
}
