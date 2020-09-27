import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
//import Image from "../components/image"
import SEO from "../components/seo";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: "calc(100vw * 0.9 * 1.5)",
    maxHeight: "100vh",
    display: "block",
    maxWidth: "calc(100vw * 0.9)",
    overflow: "hidden",
    width: "100%",
    margin: "0 auto",
  },
  imgLandscape: {
    height: "calc(100vh * 0.9)",
    maxHeight: "100vh",
    display: "block",
    maxWidth: "calc(100vh * 0.9 * 1.5)",
    overflow: "hidden",
    width: "100%",
    margin: "0 auto",
  },
  dotActive: {
    backgroundColor: theme.palette.text.primary,
  },
  btn: {
    width: "1.5em",
    minWidth: "unset",
    height: "1.5em",
    position: "relative",
    bottom: "calc((100vw * 0.9 * 1.5) / 2)",
    background: "rgba(210,210,210,0.75)",
    borderRadius: "50%",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  btnLandscape: {
    width: "1.5em",
    minWidth: "unset",
    height: "1.5em",
    position: "relative",
    bottom: "calc((100vh * 0.95) / 2)",
    background: "rgba(210,210,210,0.75)",
    borderRadius: "50%",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  container: {
    maxWidth: "90%",
    margin: `0 auto`,
  },
}));

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      bedroom1ImageP: file(
        relativePath: { eq: "carousel-mobile/bedroom-1-portrait.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroom2ImageP: file(
        relativePath: { eq: "carousel-mobile/bedroom-2-portrait.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      streetImageP: file(
        relativePath: { eq: "carousel-mobile/street-portrait.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingRoom1ImageP: file(
        relativePath: { eq: "carousel-mobile/living-room-1-portrait.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingRoom2ImageP: file(
        relativePath: { eq: "carousel-mobile/living-room-2-portrait.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kitchen1ImageP: file(
        relativePath: { eq: "carousel-mobile/kitchen-1-portrait.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kitchen2ImageP: file(
        relativePath: { eq: "carousel-mobile/kitchen-2-portrait.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bathroom1ImageP: file(
        relativePath: { eq: "carousel-mobile/bathroom-1-portrait.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bathroom2ImageP: file(
        relativePath: { eq: "carousel-mobile/bathroom-2-portrait.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      terraceImageP: file(
        relativePath: { eq: "carousel-mobile/terrace-portrait.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bathroom1Image: file(
        relativePath: { eq: "carousel-landscape/bathroom-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bathroom2Image: file(
        relativePath: { eq: "carousel-landscape/bathroom-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroom1Image: file(
        relativePath: { eq: "carousel-landscape/bedroom-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroom2Image: file(
        relativePath: { eq: "carousel-landscape/bedroom-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kitchen1Image: file(
        relativePath: { eq: "carousel-landscape/kitchen-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kitchen2Image: file(
        relativePath: { eq: "carousel-landscape/kitchen-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingRoom1Image: file(
        relativePath: { eq: "carousel-landscape/living-room-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingRoom2Image: file(
        relativePath: { eq: "carousel-landscape/living-room-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      streetImage: file(relativePath: { eq: "carousel-landscape/street.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      terraceImage: file(
        relativePath: { eq: "carousel-landscape/terrace.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const isPortrait = useMediaQuery("(orientation: portrait)");

  const landscapeSteps = [
    {
      label: "Looking into the bedroom",
      imgPath: data.bedroom1Image.childImageSharp.fluid,
    },
    {
      label: "Looking out of the bedroom at a desk and into the dinning room",
      imgPath: data.bedroom2Image.childImageSharp.fluid,
    },
    {
      label: "View from the front terrace onto the street",
      imgPath: data.streetImage.childImageSharp.fluid,
    },
    {
      label: "Dinning room and large windows at the front of the apartment",
      imgPath: data.livingRoom1Image.childImageSharp.fluid,
    },
    {
      label: "Dinning room and lounge",
      imgPath: data.livingRoom2Image.childImageSharp.fluid,
    },
    {
      label: "Kitchen",
      imgPath: data.kitchen1Image.childImageSharp.fluid,
    },
    {
      label: "Kitchen from living room",
      imgPath: data.kitchen2Image.childImageSharp.fluid,
    },
    {
      label: "Bath and bathroom sink",
      imgPath: data.bathroom1Image.childImageSharp.fluid,
    },
    {
      label: "Shower",
      imgPath: data.bathroom2Image.childImageSharp.fluid,
    },
    {
      label: "Terrace at the back of the apartment",
      imgPath: data.terraceImage.childImageSharp.fluid,
    },
  ];

  const mobileSteps = [
    {
      label: "Looking into the bedroom",
      imgPath: data.bedroom1ImageP.childImageSharp.fluid,
    },
    {
      label: "Looking out of the bedroom at a desk and into the dinning room",
      imgPath: data.bedroom2ImageP.childImageSharp.fluid,
    },
    {
      label: "View from the front terrace onto the street",
      imgPath: data.streetImageP.childImageSharp.fluid,
    },
    {
      label: "Dinning room and large windows at the front of the apartment",
      imgPath: data.livingRoom1ImageP.childImageSharp.fluid,
    },
    {
      label: "Dinning room and lounge",
      imgPath: data.livingRoom2ImageP.childImageSharp.fluid,
    },
    {
      label: "Kitchen",
      imgPath: data.kitchen1ImageP.childImageSharp.fluid,
    },
    {
      label: "Kitchen from living room",
      imgPath: data.kitchen2ImageP.childImageSharp.fluid,
    },
    {
      label: "Bath and bathroom sink",
      imgPath: data.bathroom1ImageP.childImageSharp.fluid,
    },
    {
      label: "Shower",
      imgPath: data.bathroom2ImageP.childImageSharp.fluid,
    },
    {
      label: "Terrace at the back of the apartment",
      imgPath: data.terraceImageP.childImageSharp.fluid,
    },
  ];

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = mobileSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Layout>
      <SEO title="Home" />

      {/* Mobile carousel */}
      <div
        className={classes.container}
        style={{
          display: isPortrait ? `block` : `none`,
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {mobileSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Img
                  className={classes.img}
                  fluid={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <MobileStepper
          classes={{
            dotActive: classes.dotActive,
          }}
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button
              className={classes.btn}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <span className="sr-only">Next</span>
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              className={classes.btn}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              <span className="sr-only">Back</span>
            </Button>
          }
        />
      </div>

      {/* Landscape carousel */}
      <div
        className={classes.container}
        style={{
          display: !isPortrait ? `block` : `none`,
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {landscapeSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Img
                  className={classes.imgLandscape}
                  fluid={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <MobileStepper
          classes={{
            dotActive: classes.dotActive,
          }}
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button
              className={classes.btnLandscape}
              style={{ right: `2.5em` }}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <span className="sr-only">Next</span>
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              className={classes.btnLandscape}
              style={{ left: `2.5em` }}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              <span className="sr-only">Back</span>
            </Button>
          }
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
