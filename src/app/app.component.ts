import { AsyncPipe, CurrencyPipe, DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { combineLatest, map, Observable, startWith, Subject, switchMap } from 'rxjs';
import { PriceChartComponent } from './components/price-chart/price-chart.component';
import { StockHistoryPoint } from './models/stock-history.model';
import { Sp500Row } from './models/stock-price.model';
import { Sp500Service } from './services/sp500.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, DecimalPipe, FormsModule, NgClass, NgFor, NgIf, PriceChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tickerQuery = '';
  private readonly tickerSelection$ = new Subject<string>();

  readonly marketRows$: Observable<Sp500Row[]>;
  readonly selectedTicker$: Observable<string>;
  readonly history$: Observable<StockHistoryPoint[]>;

  constructor(private readonly sp500Service: Sp500Service) {
    this.marketRows$ = this.sp500Service.getMarketSnapshot();

    this.selectedTicker$ = combineLatest([
      this.marketRows$,
      this.tickerSelection$.pipe(startWith('AAPL'))
    ]).pipe(
      map(([rows, ticker]) => {
        const candidate = ticker.trim().toUpperCase();
        if (rows.some((row) => row.symbol === candidate)) {
          return candidate;
        }

        return rows[0]?.symbol ?? '';
      })
    );

    this.history$ = this.selectedTicker$.pipe(
      switchMap((symbol) => this.sp500Service.get7DayHistory(symbol))
    );
  }

  filteredRows(rows: Sp500Row[]): Sp500Row[] {
    if (!this.tickerQuery.trim()) {
      return rows;
    }

    const query = this.tickerQuery.toUpperCase();
    return rows.filter((item) => item.symbol.includes(query));
  }

  onTickerChange(value: string): void {
    this.tickerQuery = value;
    this.tickerSelection$.next(value);
  }

  setSelectedTicker(symbol: string): void {
    this.tickerQuery = symbol;
    this.tickerSelection$.next(symbol);
  }

  priceChangePercent(row: Sp500Row): number {
    if (row.previousPrice === 0) {
      return 0;
    }

    return ((row.latestPrice - row.previousPrice) / row.previousPrice) * 100;
  }
}
