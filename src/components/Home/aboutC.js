import React, { Component } from "react"
import aboutBG from "../../images/about01.jpg"
//import aboutImage1 from "../../images/about-image01.jpg"
//import aboutImage2 from "../../images/about-image02.jpg"
import klogo from "../../images/logo-k4ws.png"
import { FaBars,FaMapMarkerAlt} from "react-icons/fa"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"


function Map() {
  return <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat:  31.04520, lng:  31.394776 }}
  > 
  <Marker position={{lat: 31.045200, lng:  31.394600}}/>
  
  
  </GoogleMap> ;
}

const WrappedMap =withScriptjs(withGoogleMap(Map));

export default class aboutC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      css: "hero-min col-12 col-md-10",
      mapOpen:false,
      mapSwitch:"map-box d-none",
      webdata:props.webdata.edges,
    }
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "hero-min col-12 col-md-10" })
      : this.setState({
          navbarOpen: true,
          css: "hero-full col-12",
        })
  }
  mapHandler = () => {
    this.state.mapOpen
      ? this.setState({ mapOpen: false, mapSwitch: "map-box d-none" })
      : this.setState({
          mapOpen: true,
          mapSwitch: "map-box d-block",
        })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className={this.state.css}>
          <div className="logo-k4ws">
            <Link to="/">
              <img src={klogo} alt="Logo"/>
            </Link>
            </div>

            <div className="toggle-btn">
              <button onClick={this.mapHandler}>
              <FaMapMarkerAlt />
              </button>
              <button onClick={this.navbarHandler}>
              <FaBars />
              </button>
            
            </div>
            <div>
              <div className="hero-bg">
                <img src={aboutBG} alt="About Backgroud"/>
                <div className="about-outer">
                  <h1 className="about-header">من نحن</h1>
                <div className="about-text fadeinn">
                  <p className="about-text-p1">
                    {this.state.webdata[0].node.aboutText1.aboutText1}
                  </p>
                  <div className="about-img">
                    <Img fluid={this.state.webdata[0].node.aboutImageDesktop.fluid}/>
                  </div>
                  <div className="about-img-m">
                    <Img fluid={this.state.webdata[0].node.aboutImageMobile.fluid}/>
                  </div>
                  <p className="about-text-p2">
                     {this.state.webdata[0].node.aboutText2.aboutText2}
                  </p>
                  
                </div>
                </div>
                <div className={this.state.mapSwitch}>
                  <WrappedMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsGwp19k_0lr31Hnyos-OPLdJ9FwTO6k4&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
