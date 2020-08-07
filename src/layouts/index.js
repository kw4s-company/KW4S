import React from "react";
import PropTypes from "prop-types";
//import { useStaticQuery, graphql } from "gatsby";
import "./bootstrap.min.css";
import "./layout.css";
import "./nav.css";
import "./main.css";
import "./service.css";
import "./work.css";
import "./about.css";
import "./contact.css";
import Navbar from "../components/Globals/Navbar";
import Transition from "../components/transition";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Layout = ({ children , location }) => 
<>
<Navbar/>
<Transition location={location}>{children}</Transition>


</>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
