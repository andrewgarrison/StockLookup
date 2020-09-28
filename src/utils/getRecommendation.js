import { CONVERSION_UNITS } from "../constants";

export const getRecommendation = (trends) => {
  if (!trends) return null;
  const { strongBuy, buy, hold, sell, strongSell } = trends;

  const strongBuyConversion = strongBuy * CONVERSION_UNITS.STRONG_BUY;
  const buyConversion = buy * CONVERSION_UNITS.BUY;
  const holdConversion = hold * CONVERSION_UNITS.HOLD;
  const sellConversion = sell * CONVERSION_UNITS.SELL;
  const strongSellConversion = strongSell * CONVERSION_UNITS.STRONG_SELL;
  const convertedTotal =
    strongBuyConversion +
    buyConversion +
    holdConversion +
    sellConversion +
    strongSellConversion;
  const totalTrends = strongBuy + buy + hold + sell + strongSell;
  const average = convertedTotal / totalTrends;

  if (average === CONVERSION_UNITS.STRONG_BUY) return "Strong Buy";
  if (average === CONVERSION_UNITS.BUY) return "Buy";
  if (average === CONVERSION_UNITS.HOLD) return "Hold";
  if (average === CONVERSION_UNITS.SELL) return "Sell";
  if (average === CONVERSION_UNITS.STRONG_SELL) return "Strong Sell";
  if (average > CONVERSION_UNITS.HOLD) {
    if (average < CONVERSION_UNITS.BUY / 2) return "Hold";
    else if (
      average <
      (CONVERSION_UNITS.STRONG_BUY + CONVERSION_UNITS.BUY) / 2
    ) {
      return "Buy";
    } else return "Strong Buy";
  } else {
    if (average > CONVERSION_UNITS.SELL / 2) return "Hold";
    else if (
      average >
      (CONVERSION_UNITS.STRONG_SELL + CONVERSION_UNITS.SELL) / 2
    ) {
      return "Sell";
    } else return "Strong Sell";
  }
};
