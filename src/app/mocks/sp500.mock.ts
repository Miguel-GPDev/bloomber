import { StockHistoryByRange } from '../models/stock-history.model';
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

export const SP500_HISTORY_MOCK: StockHistoryByRange[] = [
  {
    symbol: 'AAPL',
    intraday: [
      { date: '09:30', close: 253.2 },
      { date: '10:00', close: 253.8 },
      { date: '10:30', close: 254.1 },
      { date: '11:00', close: 253.9 },
      { date: '11:30', close: 254.4 },
      { date: '12:00', close: 255.0 },
      { date: '12:30', close: 255.6 },
      { date: '13:00', close: 256.4 }
    ],
    d7: [
      { date: '2026-02-16', close: 251.4 },
      { date: '2026-02-17', close: 252.1 },
      { date: '2026-02-18', close: 253.8 },
      { date: '2026-02-19', close: 252.9 },
      { date: '2026-02-20', close: 254.3 },
      { date: '2026-02-21', close: 255.7 },
      { date: '2026-02-22', close: 256.4 }
    ],
    m1: [
      { date: '2026-01-22', close: 244.5 },
      { date: '2026-01-27', close: 246.2 },
      { date: '2026-02-01', close: 248.9 },
      { date: '2026-02-06', close: 250.1 },
      { date: '2026-02-11', close: 251.8 },
      { date: '2026-02-16', close: 253.4 },
      { date: '2026-02-22', close: 256.4 }
    ],
    y1: [
      { date: '2025-03-01', close: 201.7 },
      { date: '2025-05-01', close: 212.5 },
      { date: '2025-07-01', close: 221.4 },
      { date: '2025-09-01', close: 233.1 },
      { date: '2025-11-01', close: 241.2 },
      { date: '2026-01-01', close: 248.7 },
      { date: '2026-02-22', close: 256.4 }
    ]
  },
  {
    symbol: 'MSFT',
    intraday: [
      { date: '09:30', close: 484.8 },
      { date: '10:00', close: 485.2 },
      { date: '10:30', close: 485.9 },
      { date: '11:00', close: 485.5 },
      { date: '11:30', close: 486.0 },
      { date: '12:00', close: 486.3 },
      { date: '12:30', close: 486.7 },
      { date: '13:00', close: 486.9 }
    ],
    d7: [
      { date: '2026-02-16', close: 481.2 },
      { date: '2026-02-17', close: 482.8 },
      { date: '2026-02-18', close: 484.5 },
      { date: '2026-02-19', close: 483.7 },
      { date: '2026-02-20', close: 485.4 },
      { date: '2026-02-21', close: 486.1 },
      { date: '2026-02-22', close: 486.9 }
    ],
    m1: [
      { date: '2026-01-22', close: 468.8 },
      { date: '2026-01-27', close: 470.9 },
      { date: '2026-02-01', close: 474.0 },
      { date: '2026-02-06', close: 477.6 },
      { date: '2026-02-11', close: 480.1 },
      { date: '2026-02-16', close: 483.9 },
      { date: '2026-02-22', close: 486.9 }
    ],
    y1: [
      { date: '2025-03-01', close: 398.6 },
      { date: '2025-05-01', close: 415.9 },
      { date: '2025-07-01', close: 431.4 },
      { date: '2025-09-01', close: 446.7 },
      { date: '2025-11-01', close: 459.3 },
      { date: '2026-01-01', close: 473.8 },
      { date: '2026-02-22', close: 486.9 }
    ]
  },
  {
    symbol: 'AMZN',
    intraday: [
      { date: '09:30', close: 171.2 },
      { date: '10:00', close: 171.0 },
      { date: '10:30', close: 171.6 },
      { date: '11:00', close: 172.1 },
      { date: '11:30', close: 171.9 },
      { date: '12:00', close: 172.5 },
      { date: '12:30', close: 173.1 },
      { date: '13:00', close: 173.8 }
    ],
    d7: [
      { date: '2026-02-16', close: 169.1 },
      { date: '2026-02-17', close: 170.5 },
      { date: '2026-02-18', close: 171.8 },
      { date: '2026-02-19', close: 172.2 },
      { date: '2026-02-20', close: 171.6 },
      { date: '2026-02-21', close: 172.7 },
      { date: '2026-02-22', close: 173.8 }
    ],
    m1: [
      { date: '2026-01-22', close: 163.9 },
      { date: '2026-01-27', close: 165.4 },
      { date: '2026-02-01', close: 167.0 },
      { date: '2026-02-06', close: 168.6 },
      { date: '2026-02-11', close: 170.2 },
      { date: '2026-02-16', close: 171.9 },
      { date: '2026-02-22', close: 173.8 }
    ],
    y1: [
      { date: '2025-03-01', close: 142.3 },
      { date: '2025-05-01', close: 148.8 },
      { date: '2025-07-01', close: 153.6 },
      { date: '2025-09-01', close: 159.2 },
      { date: '2025-11-01', close: 164.8 },
      { date: '2026-01-01', close: 169.7 },
      { date: '2026-02-22', close: 173.8 }
    ]
  },
  {
    symbol: 'NVDA',
    intraday: [
      { date: '09:30', close: 419.0 },
      { date: '10:00', close: 419.6 },
      { date: '10:30', close: 420.3 },
      { date: '11:00', close: 420.0 },
      { date: '11:30', close: 420.8 },
      { date: '12:00', close: 421.1 },
      { date: '12:30', close: 421.3 },
      { date: '13:00', close: 421.5 }
    ],
    d7: [
      { date: '2026-02-16', close: 416.2 },
      { date: '2026-02-17', close: 417.5 },
      { date: '2026-02-18', close: 419.9 },
      { date: '2026-02-19', close: 420.7 },
      { date: '2026-02-20', close: 421.1 },
      { date: '2026-02-21', close: 420.4 },
      { date: '2026-02-22', close: 421.5 }
    ],
    m1: [
      { date: '2026-01-22', close: 401.6 },
      { date: '2026-01-27', close: 404.2 },
      { date: '2026-02-01', close: 408.9 },
      { date: '2026-02-06', close: 412.4 },
      { date: '2026-02-11', close: 416.8 },
      { date: '2026-02-16', close: 419.7 },
      { date: '2026-02-22', close: 421.5 }
    ],
    y1: [
      { date: '2025-03-01', close: 311.4 },
      { date: '2025-05-01', close: 329.6 },
      { date: '2025-07-01', close: 347.2 },
      { date: '2025-09-01', close: 368.4 },
      { date: '2025-11-01', close: 389.5 },
      { date: '2026-01-01', close: 408.8 },
      { date: '2026-02-22', close: 421.5 }
    ]
  }
];
