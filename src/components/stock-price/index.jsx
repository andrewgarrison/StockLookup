import React from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@material-ui/core";
import { getStockPrice } from "../../utils/api";
import { getPercentChange } from "../../utils/getPercentChange";
import "./styles.scss";

export const StockPrice = ({ symbol }) => {
  const { isLoading, error, data } = useQuery(
    ["stockPrice", symbol],
    getStockPrice
  );

  const formattedPercentChange = () => {
    if (data) {
      const percentChange = getPercentChange(data.c, data.pc);
      if (percentChange >= 0) {
        return `+${percentChange}`;
      } else {
        return `${percentChange}`;
      }
    }

    return null;
  };

  if (isLoading) return <CircularProgress />;
  if (error || data.error) {
    return `Error fetching stock price for ${symbol}. ${
      (error && error.message) || (data && data.error)
    }`;
  }

  return (
    <div className="stock-price">
      <h3>${data.c.toFixed(2)}</h3>
      <h5
        className={getPercentChange(data.c, data.pc) > 0 ? "positive" : "negative"}
      >
        {formattedPercentChange()}% <span>Today</span>
      </h5>
    </div>
  );
};
