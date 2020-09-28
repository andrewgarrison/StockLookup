import React from "react";
import {
  StockPrice,
  CompanyProfile,
  CompanyNews,
  RecommendationTrends,
} from "../components";

export const StockInfo = (props) => {
  return (
    <div className="stock-info">
      <CompanyProfile {...props} />
      <StockPrice {...props} />
      <RecommendationTrends {...props} />
      <CompanyNews {...props} />
    </div>
  );
};
