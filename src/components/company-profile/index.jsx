import React from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@material-ui/core";
import { getCompanyProfile } from "../../utils/api";
import "./styles.scss";

export const CompanyProfile = ({ symbol }) => {
  const { isLoading, error, data } = useQuery(
    ["companyProfile", symbol],
    getCompanyProfile
  );

  if (isLoading) return <CircularProgress />;
  if (error || data.error) {
    return `Error fetching company profile for ${symbol}. ${
      (error && error.message) || (data && data.error)
    }`;
  }

  return (
    <div className="company-profile">
      {data.logo ? (
        <div
          className="company-profile__logo-container"
          style={{ backgroundImage: `url(${data.logo})` }}
        ></div>
      ) : (
        <div className="company-profile__faux-logo">{symbol}</div>
      )}
      <h1 className="company-profile__name">{data.name}</h1>
      <a className="company-profile__link" href={data.weburl}>
        {data.weburl}
      </a>
    </div>
  );
};
