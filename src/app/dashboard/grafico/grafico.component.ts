import { Component, OnInit, Input } from "@angular/core";
import { FullScreenService } from 'src/app/framework/shared/services/fullScreenService';

declare var ApexCharts: any;

@Component({
  selector: "app-grafico",
  templateUrl: "./grafico.component.html",
  styleUrls: []
})
export class GraficoComponent implements OnInit {
  @Input() id: string
  @Input() height: string

  protected chart: any;

  constructor(private fullScreenService: FullScreenService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.renderGraph();
    
    var element = document.querySelector('#' + this.id) as HTMLElement;
    console.log(element.clientHeight, element.offsetHeight, element.scrollHeight);
  }

  onResize(event: Event) {

    var element = document.querySelector('#' + this.id) as HTMLElement;

    console.log(element.clientHeight, element.offsetHeight, element.scrollHeight, this.fullScreenService.fullScreenActive());

    this.updateHeightOfGraph(element.clientHeight);
  }

  private renderGraph() {
    var element = document.querySelector('#' + this.id) as HTMLElement;

    var options = {
      chart: {
        type: 'bar',
        stacked: true,
        height: element.clientHeight,
      },
      colors: ['#187422', '#aa1414'],
      series: [
        {
          name: 'Entregues',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 300, 30, 40, 45, 50, 49, 60, 70, 91, 125, 300, 30, 40, 45, 50, 49, 60, 70, 91, 125, 300, 50]
        },
        {
          name: 'Não Entregues',
          data: [330, 40, 45, 50, 49, 60, 70, 91, 125, 300, 30, 40, 45, 50, 49, 60, 70, 91, 125, 300, 30, 40, 45, 50, 49, 60, 70, 91, 125, 300, 50]
        },
      ],
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
      }
    };

    this.chart = new ApexCharts(element, options);

    this.chart.render();
  }

  private updateHeightOfGraph(newHeight: number) {
    this.chart.updateOptions({
      chart: {
        height: newHeight - 40,
      },
    });
  }
}
