import React from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@material-ui/core";
import { getRecommendationTrends } from "../../utils/api";
import { getRecommendation } from "../../utils/getRecommendation";

export const RecommendationTrends = ({ symbol }) => {
  const { isLoading, error, data } = useQuery(
    [`recommendationTrends-${symbol}`, symbol],
    getRecommendationTrends
  );

  if (isLoading) return <CircularProgress />;
  if (error || data.error) {
    return `Error fetching recommendation trends for ${symbol}. ${
      (error && error.message) || (data && data.error)
    }`;
  }

  return (
    <div className="recommendation-trends">
      <h3>What Wall Street Thinks</h3>
      <h5>{getRecommendation(data[0])}</h5>
      <p></p>
    </div>
  );
};
