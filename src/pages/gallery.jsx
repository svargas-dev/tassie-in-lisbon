import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./gallery.css";

export default function Gallery() {
  const data = useStaticQuery(graphql`
    query {
      armchairImage: file(relativePath: { eq: "gallery/armchair.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      azulejosImage: file(relativePath: { eq: "gallery/azulejos.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bathroomImage: file(relativePath: { eq: "gallery/bathroom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bathroom2Image: file(relativePath: { eq: "gallery/bathroom2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      catsImage: file(relativePath: { eq: "gallery/cats-on-terrace.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ceilingImage: file(relativePath: { eq: "gallery/ceiling.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entranceHallImage: file(
        relativePath: { eq: "gallery/entrance-hall-banister.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entranceHallTilesImage: file(
        relativePath: { eq: "gallery/entrance-hall-tiles.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feiraDaLadraImage: file(
        relativePath: { eq: "gallery/feira-da-ladra.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frontDoorImage: file(relativePath: { eq: "gallery/front-door.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gateImage: file(relativePath: { eq: "gallery/gate.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kitchenSinkImage: file(relativePath: { eq: "gallery/kitchen-sink.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maatImage: file(relativePath: { eq: "gallery/maat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maeDAguaImage: file(relativePath: { eq: "gallery/mae-d-agua.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maeDAgua2Image: file(relativePath: { eq: "gallery/mae-d-agua-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mirrorHead: file(relativePath: { eq: "gallery/mirror-head.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondBedroomImage: file(
        relativePath: { eq: "gallery/second-bedroom.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondBedroomEnSuiteImage: file(
        relativePath: { eq: "gallery/second-bedroom-en-suite.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shipBeachImage: file(relativePath: { eq: "gallery/ship-beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoesImage: file(relativePath: { eq: "gallery/shoes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shutterImage: file(relativePath: { eq: "gallery/shutter-detail.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stillLifeImage: file(relativePath: { eq: "gallery/still-life.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      streetImage: file(relativePath: { eq: "gallery/street-scene.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      streetViewRiverImage: file(
        relativePath: { eq: "gallery/street-view-river.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      succelentImage: file(
        relativePath: { eq: "gallery/terrace-succulents.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      timeoutImage: file(relativePath: { eq: "gallery/timeout-market.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [tileImages, setTileImages] = React.useState([]);
  React.useEffect(() => {
    if (tileImages.length === 0) setTileImages(Object.values(data));
  }, [data, tileImages.length]);

  return (
    <>
      <Layout>
        <SEO title="Gallery" />
        <Typography component="h2" variant="h3" align="center" gutterBottom>
          Gallery
        </Typography>

        <div className="row">
          <div className="column">
            {/* tile is sometimes inexplicably undefined - I'm guessing this is due is async data from graphql */}
            {tileImages
              .slice(0, 5)
              .map(
                (tile, index) =>
                  tile && <Img key={index} fluid={tile.childImageSharp.fluid} />
              )}
          </div>
          <div className="column">
            {tileImages
              .slice(6, 11)
              .map(
                (tile, index) =>
                  tile && <Img key={index} fluid={tile.childImageSharp.fluid} />
              )}
          </div>
          <div className="column">
            {tileImages
              .slice(12, 18)
              .map(
                (tile, index) =>
                  tile && <Img key={index} fluid={tile.childImageSharp.fluid} />
              )}
          </div>
          <div className="column">
            {tileImages
              .slice(19, 26)
              .map(
                (tile, index) =>
                  tile && <Img key={index} fluid={tile.childImageSharp.fluid} />
              )}
          </div>
        </div>
      </Layout>
    </>
  );
}
