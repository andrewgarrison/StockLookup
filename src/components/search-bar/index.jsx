import React, { useState, useEffect } from "react";
import { queryCache } from "react-query";
import { Input, Results } from "./components";
import { prefetchSearchResults } from "../../utils/api";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import "./style.scss";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "400px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "400px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const SearchBar = (props) => {
  const { inHeader } = props;
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (queryCache.getQueryData("symbols") === undefined) {
      queryCache.prefetchQuery("symbols", prefetchSearchResults);
    }
  }, []);

  useEffect(() => {
    if (props.location.pathname) setValue("");
  }, [props.location.pathname]);

  const handleOnChange = ({ target }) => {
    const data = queryCache.getQueryData("symbols");
    const value = target.value.toLowerCase();
    const filterData = (result) => {
      return (
        result.symbol.toLowerCase().indexOf(value) !== -1 ||
        result.description.toLowerCase().indexOf(value) !== -1
      );
    };

    if (data) setResults(data.filter(filterData));
    setValue(target.value);
  };

  return (
    <div className="search-bar">
      {inHeader ? (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            onChange={handleOnChange}
            value={value}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      ) : (
        <Input onChange={handleOnChange} value={value} />
      )}
      <Results inHeader={inHeader} results={results} value={value} />
    </div>
  );
};
