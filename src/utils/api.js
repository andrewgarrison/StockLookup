import axios from "axios";

const baseEndpoint = "https://finnhub.io/api/v1";
const token = `${process.env.REACT_APP_API_KEY}`;

export const prefetchSearchResults = async () => {
  const { data } = await axios.get(
    `${baseEndpoint}/stock/symbol?exchange=US&token=${token}`
  );
  return data;
};

export const getStockPrice = async (_, symbol) => {
  const { data } = await axios.get(
    `${baseEndpoint}/quote?symbol=${symbol}&token=${token}`
  );
  return data;
};

export const getCompanyProfile = async (_, symbol) => {
  const { data } = await axios.get(
    `${baseEndpoint}/stock/profile2?symbol=${symbol}&token=${token}`
  );
  return data;
};

export const getCompanyNews = async (_, symbol, last7Days, today) => {
  const { data } = await axios.get(
    `${baseEndpoint}/company-news?symbol=${symbol}&from=${last7Days}&to=${today}&token=${token}`
  );
  return data;
};

export const getRecommendationTrends = async (_, symbol) => {
  const { data } = await axios.get(
    `${baseEndpoint}/stock/recommendation?symbol=${symbol}&token=${token}`
  );
  return data;
};

export const getChartData = async (_, symbol, resolution, from, to) => {
  const { data } = await axios.get(
    `${baseEndpoint}/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${token}`
  );
  return data;
};
