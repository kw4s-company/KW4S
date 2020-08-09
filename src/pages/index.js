import React from "react"
import { graphql } from "gatsby"
//import { Link, graphql, StaticQuery } from "gatsby"


import SEO from "../components/seo"

import Main from "../components/Home/main"


const IndexPage = ({ data }) => (
  <>
    <SEO title="Main" />
    <Main webdata={data.kw4sData}/>
 </>
 
)

export const query = graphql`
{
  kw4sData:allContentfulKw4SData{
    edges{
      node{
        mainSlider1{
          fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid
          }
        }
        mainSlider2{
          fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid
          }
        }
        mainSlider3{
          fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid
          }
        }
        mainSlider4{
          fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid
          }
        }
        mainText1{
          mainText1
        }
        mainText2{
          mainText2
        }
        mainText3{
          mainText3
        }
        phone
        gmail
        facebook
      }
    }
  }
}

`

export default IndexPage