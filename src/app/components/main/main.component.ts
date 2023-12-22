import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  cards: any[] = [];

  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    this.getCardsFromApi();
  }

  getCardsFromApi() {
    this.cardService.getCards().subscribe((data: any) => {
      this.cards = data;
      console.log(data);
    });
  }
}
