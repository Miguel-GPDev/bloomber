import { AsyncPipe, CurrencyPipe, DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Sp500Row } from './models/stock-price.model';
import { Sp500Service } from './services/sp500.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, DecimalPipe, FormsModule, NgClass, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tickerQuery = '';
  readonly marketRows$: Observable<Sp500Row[]>;

  constructor(private readonly sp500Service: Sp500Service) {
    this.marketRows$ = this.sp500Service.getMarketSnapshot();
  }

  filteredRows(rows: Sp500Row[]): Sp500Row[] {
    if (!this.tickerQuery.trim()) {
      return rows;
    }

    const query = this.tickerQuery.toUpperCase();
    return rows.filter((item) => item.symbol.includes(query));
  }

  priceChangePercent(row: Sp500Row): number {
    if (row.previousPrice === 0) {
      return 0;
    }

    return ((row.latestPrice - row.previousPrice) / row.previousPrice) * 100;
  }
}
