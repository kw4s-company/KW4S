import React from "react"
//import { Link, graphql, StaticQuery } from "gatsby"


import SEO from "../components/seo"

import Main from "../components/Home/main"


const IndexPage = ({ data }) => (
  <>
    <SEO title="Main" />
    <Main />
 </>
 
)


export default IndexPage