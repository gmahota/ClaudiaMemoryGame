import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { createStyles,makeStyles, Theme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((_:Theme) => (
  createStyles({
    grid: {
      position: "relative",
      width: "100%",
      minHeight: "1px",
      paddingRight: "15px",
      paddingLeft: "15px",
      flexBasis: "auto"
    }
  }
  )
));

type Props = {
  children: React.ReactNode
  className?: string,
  xs?:any,
  sm?:any,
  md?:any
}

export const GridItem = function GridItem(props: Props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}