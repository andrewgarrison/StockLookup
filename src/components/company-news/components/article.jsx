import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 800,
    marginBottom: 32,
  },
  link: {
    color: "initial",
    textDecoration: "none",
  },
  actionArea: {
    display: "flex",
    justifyContent: "flex-start"
  },
  image: {
    height: 200,
    width: 200,
    objectFit: "cover",
  },
  details: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
    opacity: 0.7,
  },
  source: {
    fontWeight: "normal",
  },
  date: {
    fontWeight: "normal",
  },
  bullet: {
    margin: "0 6px",
    fontSize: "0.83em",
  },
}));

export const Article = ({ data }) => {
  const { headline, image, source, summary, url, datetime } = data;
  const classes = useStyles();
  const timeAgo = new TimeAgo("en-US");

  if (!image || image === "") return null;
  return (
    <Card className={classes.root}>
      <a
        className={classes.link}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.image}
            component="img"
            alt={headline}
            height="140"
            image={image}
            title={headline}
          />
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {headline && headline.substring(0, 100)}
            </Typography>
            <div className={classes.details}>
              <Typography
                className={classes.source}
                variant="inherit"
                component="h5"
              >
                {source && source}
              </Typography>
              <span className={classes.bullet}>{"\u2022"}</span>
              <Typography
                className={classes.date}
                variant="inherit"
                component="h5"
              >
                {timeAgo.format(new Date(datetime * 1000), "twitter")}
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {summary && summary.substring(0, 200)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
};
