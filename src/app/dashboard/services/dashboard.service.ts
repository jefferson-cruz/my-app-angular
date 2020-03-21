import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CardCollection } from './models/cardCollection.model';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    
    readonly totalGerado:string = 'totalGerado'
    readonly rejeitados:string = 'rejeitados'
    readonly embossing:string = 'embossing'
    readonly atrasoEmbossing:string = 'atrasoEmbossing'
    readonly entrega:string = 'entrega'
    readonly atrasoEntrega:string = 'atrasoEntrega'
    readonly totalNaoEntregue:string = 'totalNaoEntregue'
    readonly totalEntregue:string = 'totalEntregue'

    constructor(private http: HttpClient) {
   
    }

    public getCards(): CardCollection {

        let cards = new CardCollection();
        cards.Add(this.totalGerado, { ammount: 5000, percentage: null, title: 'Total de Cartões Gerados' });
        cards.Add(this.rejeitados, { ammount: 5000, percentage: null, title: 'Rejeitados' });
        cards.Add(this.embossing, { ammount: 5000, percentage: null, title: 'Embossing' });
        cards.Add(this.atrasoEmbossing, { ammount: 5000, percentage: null, title: 'Atraso Embossing' });
        cards.Add(this.entrega, { ammount: 5000, percentage: null, title: 'Entrega' });
        cards.Add(this.atrasoEntrega, { ammount: 5000, percentage: null, title: 'Atraso Entrega' });
        cards.Add(this.totalEntregue, { ammount: 5000, percentage: null, title: 'Total de Cartões Entregues' });
        cards.Add(this.totalNaoEntregue, { ammount: 5000, percentage: null, title: 'Total de Cartões Não Entregues' });

        return cards;
    }

    public getGraph(): any {
        return {
            series: [
                {
                    name: "Entregues",
                    data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43, 12]
                },
                {
                    name: "Não entregues",
                    data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14, 70]
                }
            ]
        };
    }
}