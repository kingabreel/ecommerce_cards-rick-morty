import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  cards: any[] = [];

  constructor(private cardService: CardsService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getCardsFromApi();
  }

  getCardsFromApi() {
    this.cardService.getCards().subscribe((data: any) => {
      this.cards = data.results.map((result: any) => ({
        id: result.id,
        name: result.name,
        image: result.image,
        species: result.species,
        gender: result.gender,
        price: this.getRandomPrice(30, 100),
      }));
    });
  }

  private getRandomPrice(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  addToCart(card: any){
    if (!card.isSold) {
      this.cartService.addToCart(card);
      card.isSold = true;
    }
  }
}
