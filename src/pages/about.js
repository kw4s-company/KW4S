import React from "react"



import SEO from "../components/seo"

import AboutC from "../components/Home/aboutC"

const AboutPage = ({ data }) => (
  <>
    <SEO title="About Us" />
    <AboutC />
  </>
)




export default AboutPage

/*import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      styleClass="default-background"
      img={data.img.childImageSharp.fluid}
      title="coffee corner"
    />
    <div>
      <h2 className="default-background">hi from div2</h2>
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage*/
