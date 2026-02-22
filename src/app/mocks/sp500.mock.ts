import { StockInfo, StockPriceResponse } from '../models/stock-price.model';
import { StockHistory } from '../models/stock-history.model';

export const SP500_PRICE_MOCK: StockPriceResponse[] = [
  {
    p: [255, 255.8, 256.4],
    s: 'AAPL',
    skip: 0,
    t: [1585108800073, 1585108800315, 1585108800381],
    v: [2513, 24, 1],
    x: ['P', 'P', 'P'],
    count: 3,
    c: [['1', '24'], ['1', '24', '12'], ['1', '24', '12']]
  },
  {
    p: [486.2, 487.3, 486.9],
    s: 'MSFT',
    skip: 0,
    t: [1585108801073, 1585108801315, 1585108801381],
    v: [1980, 45, 11],
    x: ['P', 'P', 'P'],
    count: 3,
    c: [['3', '18'], ['3', '18', '07'], ['3', '18', '07']]
  },
  {
    p: [172.5, 173.1, 173.8],
    s: 'AMZN',
    skip: 0,
    t: [1585108802073, 1585108802315, 1585108802381],
    v: [3150, 87, 22],
    x: ['P', 'P', 'P'],
    count: 3,
    c: [['7', '31'], ['7', '31', '09'], ['7', '31', '09']]
  },
  {
    p: [421.3, 420.8, 421.5],
    s: 'NVDA',
    skip: 0,
    t: [1585108803073, 1585108803315, 1585108803381],
    v: [4025, 102, 54],
    x: ['P', 'P', 'P'],
    count: 3,
    c: [['5', '42'], ['5', '42', '01'], ['5', '42', '01']]
  }
];

export const SP500_INFO_MOCK: StockInfo[] = [
  {
    currency: 'USD',
    description: 'APPLE INC',
    displaySymbol: 'AAPL',
    figi: 'BBG000B9Y5X2',
    mic: 'XNGS',
    symbol: 'AAPL',
    type: 'Common Stock'
  },
  {
    currency: 'USD',
    description: 'MICROSOFT CORP',
    displaySymbol: 'MSFT',
    figi: 'BBG000BPH459',
    mic: 'XNGS',
    symbol: 'MSFT',
    type: 'Common Stock'
  },
  {
    currency: 'USD',
    description: 'AMAZON.COM INC',
    displaySymbol: 'AMZN',
    figi: 'BBG000BVPV84',
    mic: 'XNGS',
    symbol: 'AMZN',
    type: 'Common Stock'
  },
  {
    currency: 'USD',
    description: 'NVIDIA CORP',
    displaySymbol: 'NVDA',
    figi: 'BBG000BBJQV0',
    mic: 'XNGS',
    symbol: 'NVDA',
    type: 'Common Stock'
  }
];


export const SP500_HISTORY_MOCK: StockHistory[] = [
  {
    symbol: 'AAPL',
    points: [
      { date: '2026-02-16', close: 251.4 },
      { date: '2026-02-17', close: 252.1 },
      { date: '2026-02-18', close: 253.8 },
      { date: '2026-02-19', close: 252.9 },
      { date: '2026-02-20', close: 254.3 },
      { date: '2026-02-21', close: 255.7 },
      { date: '2026-02-22', close: 256.4 }
    ]
  },
  {
    symbol: 'MSFT',
    points: [
      { date: '2026-02-16', close: 481.2 },
      { date: '2026-02-17', close: 482.8 },
      { date: '2026-02-18', close: 484.5 },
      { date: '2026-02-19', close: 483.7 },
      { date: '2026-02-20', close: 485.4 },
      { date: '2026-02-21', close: 486.1 },
      { date: '2026-02-22', close: 486.9 }
    ]
  },
  {
    symbol: 'AMZN',
    points: [
      { date: '2026-02-16', close: 169.1 },
      { date: '2026-02-17', close: 170.5 },
      { date: '2026-02-18', close: 171.8 },
      { date: '2026-02-19', close: 172.2 },
      { date: '2026-02-20', close: 171.6 },
      { date: '2026-02-21', close: 172.7 },
      { date: '2026-02-22', close: 173.8 }
    ]
  },
  {
    symbol: 'NVDA',
    points: [
      { date: '2026-02-16', close: 416.2 },
      { date: '2026-02-17', close: 417.5 },
      { date: '2026-02-18', close: 419.9 },
      { date: '2026-02-19', close: 420.7 },
      { date: '2026-02-20', close: 421.1 },
      { date: '2026-02-21', close: 420.4 },
      { date: '2026-02-22', close: 421.5 }
    ]
  }
];
