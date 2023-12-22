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

  removeFromCart(index: number){
    if (index >= 0 && index < this.cart.length) {
      this.cart.splice(index, 1);
    }
  }

  clearCart() {
    this.cart = [];
  }
}
