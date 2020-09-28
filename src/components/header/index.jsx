import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { SearchBar } from "../search-bar";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export const Header = (props) => {
  const classes = useStyles();
  const { location, navigate } = props;

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {location.pathname !== "/" && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => navigate("/")}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography className={classes.title} variant="h6" noWrap>
            StockSearch
          </Typography>
          {location.pathname !== "/" && <SearchBar inHeader={true} {...props} />}
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
