export const getPercentChange = (currentPrice, previousClosePrice) => {
  if (!currentPrice || !previousClosePrice) return null;
  const difference = currentPrice - previousClosePrice;

  return ((difference / previousClosePrice) * 100).toFixed(2);
};
