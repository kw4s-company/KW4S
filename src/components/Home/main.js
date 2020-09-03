import React, { Component } from "react"
import Img from "gatsby-image"
import klogo from "../../images/logo-k4ws.png"
import { FaBars, FaFacebook, FaGoogle, FaMapMarkerAlt} from "react-icons/fa"
import { MdPhoneIphone} from "react-icons/md"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby"
import Slider from "react-slick"
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


export default class main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      css: "hero-full col-12",
      webdata:props.webdata.edges,
    }
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "hero-full col-12" })
      : this.setState({
          navbarOpen: true,
          css: "hero-min col-12 col-md-10",
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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      
      arrows: true,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      
      dotsClass:"vertical-dots"
    }
    return (
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className={this.state.css}>
            <div className="logo-k4ws">
              <Link to="/">
                <img src={klogo} alt="Logo" />
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
            <div className="main-box">
            <div className="slider-box">
              <Slider {...settings}>
                <div>
                
                <Img fluid={this.state.webdata[0].node.mainSlider1.fluid}/>
                </div>
                <div>
                <Img fluid={this.state.webdata[0].node.mainSlider2.fluid}/>
                </div>
                <div>
                <Img fluid={this.state.webdata[0].node.mainSlider3.fluid}/>
                </div>
                <div>
                <Img fluid={this.state.webdata[0].node.mainSlider4.fluid}/>
                </div>
                
              </Slider>
              
            </div>
            <div className="main-text">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#06c28a" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,240C384,213,480,171,576,149.3C672,128,768,128,864,154.7C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
              <div className="main-text1">
              <h1 className="">
                <div className="text-flip">
                  <span>
                    ويب <br/>
                    تطبيقات <br/>
                    متاجر <br/>
                    مدونات <br/>
                    
                  </span>
                </div>
                <div className="text-flip">شركة خطاب</div>
                
              </h1>
              <p>
              {this.state.webdata[0].node.mainText1.mainText1}
              </p>
              <AniLink fade to="/about">
              <button className="green-btn know-more">
                اعرف المزيد
              </button>
              </AniLink>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#06c28a" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,48C384,32,480,32,576,69.3C672,107,768,181,864,197.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
              <div className="main-text2">
              <div className="row">
                <ul>
                <li><AniLink fade to="/contact"><button className="main-btn1 gray-btn">أطلب الأن</button></AniLink></li>
                <li><AniLink fade to="/service"><button className="main-btn1 gray-btn"> تصفح الخدمات</button></AniLink></li>
                </ul>
                <p>{this.state.webdata[0].node.mainText2.mainText2}</p>
              </div>

              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#06c28a" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,240C384,213,480,171,576,149.3C672,128,768,128,864,154.7C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
              <div className="main-text3">
              <div className="row">
              <p>{this.state.webdata[0].node.mainText3.mainText3}</p>
                <ul>
                <li><AniLink fade to="/contact"><button className="main-btn2 green-btn">أطلب الأن</button></AniLink></li>
                <li><AniLink fade to="/work"><button className="main-btn2 green-btn"> تصفح الأعمال</button></AniLink></li>
                </ul>
              <h1>BY M.ADEL</h1>
              </div>

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
            <footer>
              <div className="row">
                <button className="footer-btn1">
                <a href={"https://www." + this.state.webdata[0].node.facebook}>
                    <FaFacebook/>

                  </a>
                </button>
                <button className="footer-btn2">
                  <a href={"mailto:" + this.state.webdata[0].node.gmail}>
                    <FaGoogle/>

                  </a>
                </button>
               
                <button className="footer-btn3">
                  <a href={"tel:" + this.state.webdata[0].node.phone}>
                  <MdPhoneIphone/>: 0548252956
                  </a>
                </button>
              </div>
              <p>© 2020 Khatab Web and Application services , Inc. All rights reserved.</p>
              
            </footer>
          </div>
        </div>
      </div>
    )
  }
}
