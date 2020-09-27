import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Typography from "@material-ui/core/Typography";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      floorPlanImage: file(relativePath: { eq: "floor-plan.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="About" />
      <Layout>
        <article>
          <Typography component="h2" variant="h3" align="center" gutterBottom>
            About
          </Typography>
          <p>
            The apartment is situated in a part of of Lisbon which we refer to
            as ‘Lower Lapa’ and is bordered by Madragoa. This is a charming
            quiet and mainly residential area, offering a varied selection of
            both new and traditional Portuguese cafes, all of which, are within
            walking distance of the apartment. It takes about 15 minutes to walk
            to the main station of Cais do Sodre and to the central shopping
            district of Chiado.
          </p>

          <p>
            The apartment is on the second floor of a traditional 1840’s
            Portuguese building and has been recently renovated to provide
            light, airy, and spacious accommodation.
          </p>

          <p>
            The front door opens into a generously proportioned hallway which
            includes a lift, a ‘godsend’ for luggage and shopping. A wide wooden
            staircase leads to the apartment on the second floor.
          </p>

          <p>
            The building is well suited to the climate and all the doors and
            windows have shutters .We have not found it necessary to have air
            conditioning and the two fans provided are completely adequate even
            in very hot weather. Fortunately there is almost always a breeze in
            Lisbon.
          </p>

          <p>
            Many of the original features have been retained, which include the
            ornate ceilings and old pine floors. Please leave your stilettos at
            home!
          </p>

          <p>
            The french doors in the main sitting room open onto a narrow south
            facing balcony. The interior is furnished with a mixture of mainly
            Danish furniture and lights which we have collected during our many
            visits to Lisbon. There is a good sized dining room table with four
            chairs , a sofa, a large side board and various other chairs and
            small tables.
          </p>

          <p>
            The kitchen opens onto the main sitting room is well equipped. There
            is a a large belfast sink, an induction hob ,oven, dishwasher and
            under counter fridge. The work surfaces are a mixture of stainless
            steel and marble.A door leads out to a small north facing terrace
            with plants and a small round table. This provides a cool, sheltered
            space during the hot summer months.
          </p>

          <p>
            The front bedroom has a double bed, two side tables, a built in
            wardrobe and a large chandelier.
          </p>

          <p>There is an adjoining bathroom with a bath and walk in shower.</p>

          <p>
            At present we are keeping the second bedroom and bathroom for our
            own use.
          </p>

          <p>
            You will find detailed instructions about the workings of the
            apartment upon your arrival and will be met by Harriet who speaks
            English and Portuguese and is a fund of useful and up to date
            information relating to Lisbon.
          </p>

          <div
            style={{
              width: "calc(100vw * 0.75)",
              maxWidth: "calc(100vw * 0.75)",
              margin: "0 auto",
            }}
          >
            <Img
              fluid={data.floorPlanImage.childImageSharp.fluid}
              alt="floor plan"
            />
          </div>
        </article>
      </Layout>
    </>
  );
}
