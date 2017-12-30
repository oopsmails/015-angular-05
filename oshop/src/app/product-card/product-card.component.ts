import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') showActions = true;

  constructor(private cartService: ShoppingCartService) {}

  addToCart(product: Product) {
    let cartId = localStorage.getItem('cardId');
    if (!cartId) {
      this.cartService.create().then(result => {
          localStorage.setItem('cardId', result.key);
          // add product to cart
      });
    } else {
      // add product to cart
    }
  }
}
