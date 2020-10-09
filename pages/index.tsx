

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { container } from "../assets/jss/nextjs-material-kit.js";
import classNames from "classnames";

import {
  Header,
  HeaderLinks, Parallax, GridContainer, GridItem,

  Footer
} from "../components/templates"
import { SectionBasics } from "../pages-sections/Components-Sections/SectionBasics";

import Link from "next/link";
import { RegularButton } from "../components/CustomButtons/RegularButton";

const useStyles = makeStyles((_: Theme) => (
  createStyles({
    container,
    brand: {
      //color: "#FFFFFF",
      textAlign: "left"
    },
    title: {
      fontSize: "2.2rem",
      fontWeight: 600,
      display: "inline-block",
      position: "relative"
    },
    subtitle: {
      fontSize: "0.5rem",
      maxWidth: "510px",
      margin: "10px 0 0"
    },
    main: {
      //background: "#FFFFFF",
      position: "relative",
      zIndex: 3
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      "@media (max-width: 830px)": {
        marginLeft: "10px",
        marginRight: "10px"
      }
    },
    link: {
      textDecoration: "none"
    },
    textCenter: {
      textAlign: "center"
    }
  })
));

export default function Home({ org,props }) {

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Projeto Memorabilia"
        rightLinks={<HeaderLinks/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}

      />
      <Parallax image="/images/8-converted.png" >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                 <h1 className={classes.title}> 
                 <Link href="/memories/1">
                    <RegularButton
                      color="transparent"
                      target="_blank"
                    >
                      <i className=" fas fa-play-circle" /> Performance
                  </RegularButton>
                </Link>
                
                {/* Memorabilia */}
                </h1> 
                <h3 className={classes.subtitle}>
                Objetos, momentos dignos de serem lembrados ou aqueles que estão guardados na memória.
                </h3>
                <h4 className={classes.subtitle}>Atenção isto é um protopito(20% do projeto), não é a versão final!!!</h4>

                
              </div>

            </GridItem>
          </GridContainer>
        </div>

      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/*<SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      </div>

      {/* <Footer /> */}

      {/* <h1>{org.login}</h1>
      <h2>{org.description}</h2>

      <p>Site: <a href={org.blog}>{org.blog}</a></p> */}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://api.github.com/orgs/mahotaservicos');
  const data = await response.json();

  return {
    props: {
      org: data,
    },
    revalidate: 10
  }
};