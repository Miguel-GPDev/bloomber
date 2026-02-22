import { StockInfo, StockPriceResponse } from '../models/stock-price.model';

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
