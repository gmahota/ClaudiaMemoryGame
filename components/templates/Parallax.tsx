import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import * as React from "react"
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components

// core components
import styles from "../../assets/jss/nextjs-material-kit/components/parallaxStyle.js";


const useStyles = makeStyles((_: Theme) =>(
  createStyles({
    parallax: {
      height: "100vh",
      maxHeight: "1000px",
      overflow: "hidden",
      position: "relative",
      backgroundPosition: "center top",
      backgroundSize: "cover",
      margin: "0",
      padding: "0",
      border: "0",
      display: "flex"
    },
    filter: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)"
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
      }
    },
    small: {
      height: "380px"
    },
    parallaxResponsive: {
      [_.breakpoints.down("md")]: {
        minHeight: "660px"
      }
    }
  }
)
));


type Props = {
  children: React.ReactNode
  className?: string,
  filter?: string,
  style?: string,
  image: string,
  small?: boolean,
  responsive?: boolean
}

export const Parallax = function Parallax(props: Props) {
  let windowScrollTop;
  // if (window.innerWidth >= 768) {
  //   windowScrollTop = window.pageYOffset / 3;
  // } else {
  //   windowScrollTop = 0;
  // }
  const [transform, setTransform] = React.useState("translate3d(0,0px,0)");
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const { children, className,image } = props;
  const classes = useStyles(props)
  
  return (
    <div
      className={classes.parallax}
      style={{
        ...styles ,
        backgroundImage: "url(" + image + ")",
        transform: transform
      }}
    >
      {children}
    </div>
  );

  
  
}


