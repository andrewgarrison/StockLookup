import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";
import { FixedSizeList } from "react-window";
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    padding: theme.spacing(1, 0),
    color: theme.palette.grey[600]
  },
}));

export const Results = ({ value, results, inHeader }) => {
  const classes = useStyles();
  const resultsHeight = results.length * 56;
  const getMenuHeight = resultsHeight > 400 ? 400 : resultsHeight;

  const renderRow = ({ style, index }) => {
    const result = results[index];

    return (
      <Link to={`stocks/${result.displaySymbol}`}>
        <ListItem button style={style} key={result.symbol}>
          <ListItemText
            primary={result.description}
            secondary={result.displaySymbol}
          />
        </ListItem>
      </Link>
    );
  };

  if (!value || !results) return null;
  return (
    <div
      className={`search-bar__results ${classes.root} ${
        inHeader ? "in-header" : ""
      }`}
    >
      {results && results.length > 0 ? (
        <FixedSizeList
          height={results.length ? getMenuHeight : 400}
          width={400}
          itemSize={56}
          itemCount={results ? results.length : 0}
        >
          {renderRow}
        </FixedSizeList>
      ) : (
        "No Results"
      )}
    </div>
  );
};
