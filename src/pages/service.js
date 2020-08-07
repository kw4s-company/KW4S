import React from "react"



import SEO from "../components/seo"
import ServiceC from "../components/Home/serviceC"

const ServicePage = ({ data }) => (
  <>
    <SEO title="Services" />
    <ServiceC items={data.workDataS}/>
  </>
)



export const query2 = graphql`
{

  workDataS:allContentfulOurWork{
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


export default ServicePage