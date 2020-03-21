import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { Card } from './services/models/card.model';
import { CardCollection } from './services/models/cardCollection.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  cartoesGerados:Card;
  cartoesRejeitados:Card;
  cartoesEmbossing:Card;
  cartoesAtrasoEmbossing:Card;
  cartoesEntrega:Card;
  cartoesAtrasoEntrega:Card;
  cartoesEntregue:Card;
  cartoesNaoEntregue:Card;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    let cards = this.getCards();

    this.cartoesGerados = cards.Item(this.dashboardService.totalGerado);
    this.cartoesRejeitados = cards.Item(this.dashboardService.rejeitados);
    this.cartoesEmbossing = cards.Item(this.dashboardService.embossing);
    this.cartoesAtrasoEmbossing = cards.Item(this.dashboardService.atrasoEmbossing);
    this.cartoesEntrega = cards.Item(this.dashboardService.entrega);
    this.cartoesAtrasoEntrega = cards.Item(this.dashboardService.atrasoEntrega);
    this.cartoesEntregue = cards.Item(this.dashboardService.totalEntregue);
    this.cartoesNaoEntregue = cards.Item(this.dashboardService.totalNaoEntregue);
  }

  getCards(): CardCollection {
    return this.dashboardService.getCards();
  }

  getGraph(): any {
    return this.dashboardService.getGraph();
  }

}
