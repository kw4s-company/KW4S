import React from "react"
import { graphql } from "gatsby"



import SEO from "../components/seo"
import WorkC from "../components/Home/workC"

const WorkPage = ({ data }) => (
  <>
    <SEO title="Services" />
    <WorkC items={data.workData}/>
  </>
)


export const query = graphql`
{
  workData:allContentfulOurWork{
    edges{
      node{
        id
        title
        workIcon{
          fluid(maxWidth: 500, quality: 100){
            ...GatsbyContentfulFluid
          }
        }
        logo{
          fluid(maxWidth:500, quality: 100){
            ...GatsbyContentfulFluid
          }
        }
        image{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid
          }
        }
        image1{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid
          }
        }
        image2{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid
          }
        }
        image3{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid
          }
        }
        description1
        description2
        category
      }
    }
  }
}

`


export default WorkPage