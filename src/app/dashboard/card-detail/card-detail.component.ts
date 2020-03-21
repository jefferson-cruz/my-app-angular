import { Component, OnInit, Output } from '@angular/core';
import { Card } from '../services/models/card.model';
import { DashboardService } from '../services/dashboard.service';
import { CardCollection } from '../services/models/cardCollection.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: []
})
export class CardDetailComponent implements OnInit {

  cards: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.cards = [
      [{ ammount: 5000, title: 'Correios - Embossing', percentage: null }, { ammount: 5000, title: 'Correios - Atraso Embossing', percentage: null }],
      [{ ammount: 5000, title: 'Flash - Embossing', percentage: null }, { ammount: 5000, title: 'Flash - Atraso Embossing', percentage: null }],
      [{ ammount: 5000, title: 'TexLog - Embossing', percentage: null }, { ammount: 5000, title: 'TexLog - Atraso Embossing', percentage: null }]
    ];
  }
}
