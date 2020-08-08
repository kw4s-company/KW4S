import React from "react"



import SEO from "../components/seo"
import ServiceC from "../components/Home/serviceC"

const ServicePage = ({ data }) => (
  <>
    <SEO title="Services" />
    <ServiceC items={data.workData} webdata={data.kw4sData} />
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

  kw4sData:allContentfulKw4SData{
    edges{
      node{
        serviceText1{
          serviceText1
        }
        serviceText2{
          serviceText2
        }
        serviceText3{
          serviceText3
        }
        serviceText41{
          serviceText41
        }
        serviceText42{
          serviceText42
        }
        serviceText5{
          serviceText5
        }
        serviceText6{
          serviceText6
        }
      
      }
    }
  }
}

`


export default ServicePage