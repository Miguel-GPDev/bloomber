import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { SP500_INFO_MOCK, SP500_PRICE_MOCK } from '../mocks/sp500.mock';
import { Sp500Row } from '../models/stock-price.model';

@Injectable({ providedIn: 'root' })
export class Sp500Service {
  getMarketSnapshot(): Observable<Sp500Row[]> {
    const rows = SP500_PRICE_MOCK.map((priceData) => {
      const info = SP500_INFO_MOCK.find((item) => item.symbol === priceData.s);
      const latestPrice = priceData.p.at(-1) ?? 0;
      const previousPrice = priceData.p.at(-2) ?? latestPrice;

      return {
        symbol: priceData.s,
        description: info?.description ?? 'Unknown company',
        market: info?.mic ?? 'N/A',
        latestPrice,
        previousPrice,
        volume: priceData.v.reduce((acc, next) => acc + next, 0),
        tradeType: priceData.x.at(-1) ?? 'N/A'
      };
    });

    return of(rows).pipe(delay(250));
  }
}
