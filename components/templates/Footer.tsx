/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { createStyles, makeStyles, Theme  } from "@material-ui/core";

import { List, ListItem } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import { container,primaryColor } from "../../assets/jss/nextjs-material-kit.js";

const useStyles = makeStyles((_:Theme) => (
  createStyles({
    block: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: 500,
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block"
    },
    left: {
      float: "left",
      display: "block"
    },
    right: {
      padding: "15px 0",
      margin: 0,
      float: "right"
    },
    footer: {
      padding: "0.9375rem 0",
      textAlign: "center",
      display: "flex",
      zIndex: 2,
      position: "relative"
    },
    a: {
      color: primaryColor,
      textDecoration: "none",
      backgroundColor: "transparent"
    },
    footerWhiteFont: {
      "&,&:hover,&:focus": {
        color: "#FFFFFF"
      }
    },
    container,
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0"
    },
    inlineBlock: {
      display: "inline-block",
      padding: "0px",
      width: "auto"
    },
    icon: {
      width: "18px",
      height: "18px",
      position: "relative",
      top: "3px"
    }
  }
  )
));

type Props = {
  children: React.ReactNode
  className?: string,
  whiteFont?: boolean
}


export const Footer = function Footer(props: Props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Creative Tim
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getFullYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.mahotaservicos.com/"
            className={aClasses}
            target="_blank"
          >
            Mahota Serviços
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}


