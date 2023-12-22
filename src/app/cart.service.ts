import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];


  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(card: any) {
    this.cart.push(card);
  }

  clearCart() {
    this.cart = [];
  }
}
