type Currency = {
  id: number;
  jackpot: null | number;
};

export type Game = {
  title: string;
  uniq_seo_title: boolean;
  lines: number | null;
  ways: number | null;
  volatility_rating: string | null;
  hit_rate: string | null;
  payout: string;
  devices: string[];
  provider: string;
  identifier: string;
  seo_title: string;
  currencies: {
    BTC: Currency;
    ETH: Currency;
    LTC: Currency;
    USD: Currency;
  };
  categories: string[];
  unfinished_games_for: string[];
};