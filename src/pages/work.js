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
  workData:allContentfulWorkData{
    edges{
      node{
        id
        title
        workThumpnail{
          fluid(maxWidth: 500, quality: 100){
            ...GatsbyContentfulFluid
          }
        }
        workText1{
          workText1
        }
        workText2{
          workText2
        }
        workLogo{
          fluid(maxWidth:500, quality: 100){
            ...GatsbyContentfulFluid
          }
        }
        workSlider1{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid
          }
        }
        workSlider2{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid
          }
        }
        workSlider3{
          fluid(maxWidth:500, quality:100){
            ...GatsbyContentfulFluid
          }
        }
        googlePlayLink
        appStoreLink
        webSiteLink
        category
      }
    }
  }
}

`


export default WorkPage