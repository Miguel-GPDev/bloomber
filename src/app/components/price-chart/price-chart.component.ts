import { DatePipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { StockHistoryPoint } from '../../models/stock-history.model';

@Component({
  selector: 'app-price-chart',
  standalone: true,
  imports: [DatePipe, DecimalPipe, NgFor, NgIf],
  templateUrl: './price-chart.component.html',
  styleUrl: './price-chart.component.scss'
})
export class PriceChartComponent implements OnChanges {
  @Input() symbol = '';
  @Input() points: StockHistoryPoint[] = [];

  readonly width = 760;
  readonly height = 240;
  readonly padding = 24;

  polylinePoints = '';

  ngOnChanges(): void {
    this.polylinePoints = this.buildPolyline(this.points);
  }

  private buildPolyline(points: StockHistoryPoint[]): string {
    if (!points.length) {
      return '';
    }

    const closes = points.map((point) => point.close);
    const min = Math.min(...closes);
    const max = Math.max(...closes);
    const xStep = (this.width - this.padding * 2) / Math.max(points.length - 1, 1);
    const range = Math.max(max - min, 1);

    return points
      .map((point, index) => {
        const x = this.padding + xStep * index;
        const normalized = (point.close - min) / range;
        const y = this.height - this.padding - normalized * (this.height - this.padding * 2);
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(' ');
  }
}
