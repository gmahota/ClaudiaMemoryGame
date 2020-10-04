import React from "react";
// plugin that creates slider
import Slider from "nouislider";

// @material-ui/core components
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// core components
import {GridContainer,GridItem} from "../../components/templates";

import { container,defaultFont,title } from "../../assets/jss/nextjs-material-kit.js";

const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        sections: {
            padding: "20px 0"
          },
          defaultFont,
          container,
          title: {
            ...title,
            marginTop: "30px",
            minHeight: "32px",
            textDecoration: "none"
          },
          space50: {
            height: "50px",
            display: "block"
          },
          space70: {
            height: "70px",
            display: "block"
          },
          icons: {
            width: "17px",
            height: "17px",
            color: "#FFFFFF"
          }
    })
));

export const SectionBasics = function SectionBasics(){
    const classes = useStyles();

    return (
        <div className={classes.sections}>
          <div className={classes.container}>
            <div className={classes.title}>
              <h2>Escolha Uma Memoria</h2>
            </div>
            <div id="buttons">
              <div className={classes.title}>
                <h3>
                    Seleciona o primeiro
                  <br />
                  <small> que lhe vem a cabeça </small>
                </h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  <Button color="primary">Default</Button>
                  
                </GridItem>
              </GridContainer>
              <div className={classes.title}>
                <h3>
                  <small>Pick your size</small>
                </h3>
              </div>
              <div className={classes.title}>
                <h3>
                  <small>Pick your color</small>
                </h3>
              </div>
            </div>
            <div className={classes.space50} />
            <div id="inputs">
              <div className={classes.title}>
                <h3>Inputs</h3>
              </div>
             
            </div>
            <div className={classes.space70} />
            <div id="checkRadios">
              <GridContainer>
                <GridItem xs={12} sm={6} md={4} >
                  <div className={classes.title}>
                    <h3>Checkboxes</h3>
                  </div>
                                     

                </GridItem>
                
              </GridContainer>
            </div>
            <div className={classes.space70} />
            <div id="sliders">
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.title}>
                    <h3>Sliders</h3>
                  </div>
                  <div id="sliderRegular" className="slider-primary" />
                  <br />
                  <div id="sliderDouble" className="slider-info" />
                </GridItem>
                
              </GridContainer>
            </div>
          </div>
        </div>
      );
}