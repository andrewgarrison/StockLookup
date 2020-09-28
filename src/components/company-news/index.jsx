import React from "react";
import { useQuery } from "react-query";
import { getCompanyNews } from "../../utils/api";
import { Article } from "./components/article";
import "./styles.scss";

export const CompanyNews = ({ symbol }) => {
  const date = new Date();
  const today = date.toISOString().substring(0, 10);
  const last7Days = new Date(date.setDate(date.getDate() - 7))
    .toISOString()
    .substring(0, 10);
  const { error, data } = useQuery(
    [`companyNews-${symbol}`, symbol, last7Days, today],
    getCompanyNews
  );

  if (error || data?.error) {
    return `Error fetching company news for ${symbol}. ${
      (error && error.message) || (data && data.error)
    }`;
  }
  if (data?.length === 0) return null;

  return (
    <div className="company-profile">
      <h3>Recent News</h3>
      {data?.slice(0, 10).map((article, index) => {
        let previousArticle = null;
        if (index !== 0) {
          previousArticle = data[index - 1];

          if (previousArticle.headline === article.headline) {
            return null;
          }
        }
        return <Article key={article.id} data={article} />;
      })}
    </div>
  );
};
