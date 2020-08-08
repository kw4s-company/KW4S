import React from "react"
import { graphql } from "gatsby"


import SEO from "../components/seo"

import ContactC from "../components/Home/contactC"

const ContactPage = ({ data }) => (
  <>
    <SEO title="Contact Us" />
    <ContactC webdata={data.kw4sData}/>
  </>
)


export const query = graphql`
{
  kw4sData:allContentfulKw4SData{
    edges{
      node{
        phone
        gmail
        facebook
      }
    }
  }
}

`


export default ContactPage