import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges{
  @Input() cart: any[] = [];

  sum: number = 0;

  emptyCart: boolean = false;

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.updateButton();
    this.calculateTotal();
  }

  ngOnChanges(): void {
    this.calculateTotal();
  }

  calculateTotal(){
    this.sum = 0;
    this.cart.forEach(item => {
      this.sum+= item.price;
    });
    this.updateButton();
  }

  removeItem(card: any){
    const index = this.cart.indexOf(card);
    if (index !== -1) {
      this.cartService.removeFromCart(index);
      this.calculateTotal();
    }
  }

  updateButton(){
    if(this.cart.length != 0) this.emptyCart = false;
    else this.emptyCart = true;
  }
}
