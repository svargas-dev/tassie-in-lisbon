/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import teal from "@material-ui/core/colors/teal";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./header";
import "./layout.css";

const useStyles = makeStyles({
  link: {
    color: teal[700],
  },
  textDecorationNone: {
    textDecoration: `none`,
  },
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata?.title || ``} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            fontSize: `0.75em`,
            marginTop: `2rem`,
            textAlign: `center`,
          }}
        >
          Copyright {new Date().getFullYear()}
          <br />
          <a
            className={clsx(classes.link, classes.textDecorationNone)}
            href="https://samvargas.xyz"
          >
            Sam Vargas
          </a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
