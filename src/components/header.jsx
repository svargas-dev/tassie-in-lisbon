import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  headerLink: {
    color: theme.palette.text.primary,
    letterSpacing: `0.25rem`,
    lineHeight: `1em`,
    [theme.breakpoints.down("sm")]: {
      fontSize: `3rem`,
    },
  },
  textDecorationNone: {
    textDecoration: `none`,
  },
  subtitle: theme.typography.subtitle1,
  serif: {
    fontFamily: "'Lora', serif",
  },
  textSecondary: {
    color: theme.palette.text.secondary,
  },
  nav: {
    width: `32em`,
    maxWidth: `90%`,
    display: `flex`,
    justifyContent: `space-between`,
    margin: `2.5em`,
    fontFamily: `Lora, serif`,
    fontSize: `0.75em`,
    "& a": {
      textDecoration: `none`,
      fontSize: `1.25em`,
      color: theme.palette.text.primary,
    },
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          textAlign: `center`,
        }}
      >
        <h1>
          <Link to="/" className={classes.textDecorationNone}>
            <Typography
              className={classes.headerLink}
              component="span"
              variant="h2"
            >
              {siteTitle.toUpperCase()}
            </Typography>
          </Link>
        </h1>

        <span
          className={clsx(
            classes.subtitle,
            classes.serif,
            classes.textSecondary
          )}
        >
          A home in the heart of the city
        </span>

        <nav className={classes.nav}>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
