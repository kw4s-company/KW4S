import React, { Component } from "react"
//import workBG from "../../images/work-bg.png"
import klogo from "../../images/logo-k4ws.png"
import { FaBars, FaTimes, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "gatsby"
import Img from "gatsby-image"
import workInfoBG from "../../images/work-info01.jpg"
import workInfoBGm from "../../images/work-info-m.jpg"
import workBG from "../../images/work01.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Slider from "react-slick";
import gplay from "../../images/gplay01.png"
import appstore from "../../images/appstore01.png"
import wwweb from "../../images/wwweb08.png"
//import { node } from "prop-types"
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

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ["الكل", ...categories];
  return categories;
}
export default class aboutC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      css: "hero-min col-12 col-md-10",
      items:props.items.edges,
      workItems:props.items.edges,
      categories: getCategories(props.items.edges),
      btn1Switch: "btn-info-off",
      workBtnsCss:"work-text in",
      workHeroSwitch:"show-content",
      workInfoSwitch:"hide-content",
      infoTextBoxCss:"work-info-text-box ",

      description:props.items.edges,
      currentNode:""
    }

  }

  handleItems = (category) => {
    let tempItems = [...this.state.items];
    if (category === "الكل") {
      this.setState(() => {
        return {workItems:tempItems}
      })
    }
    else {
      let items = tempItems.filter(({node}) => node.category === category);
      this.setState(()=>{
        return {workItems:items}
      })
    }
  }

  workBtnHandler = ({node}) => {
    this.setState({ workHeroSwitch:"hide-content",workInfoSwitch:"show-content",infoTextBoxCss:"work-info-text-box fadeinn", currentNode:node})
  }

  workCloseHandler = () => {
    this.setState({workHeroSwitch:"show-content",infoTextBoxCss:"work-info-text-box ", workInfoSwitch:"hide-content"})
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
    const appcheck = this.state.currentNode.category;
    var settings = {
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: true,
      arrows: true,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      LazyLoad: true,
      dotsClass:"vertical-dots"
    }
    return (
      <div>
      <div className={"container-fluid hero-scale " + this.state.workHeroSwitch}>
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
              <img src={workBG} alt="work Background" className="contact-bg"/>
                {/*<img src={workBG} alt="Work Backgroud"/>*/}


                <div className={this.state.workBtnsCss}>
                  <div className="work-box">
                  {/*categories */}
                  <div className="row mb-5">
                    <div className="col-10 mx-auto text-center filter-box">
                      {this.state.categories.map((category, index) => {
                        return (<button type="button"
                         key={index}
                          className="btn filter-btn"
                           onClick={() => {this.handleItems(category)}}>{category}</button>)
                      })}
                    </div>
                  </div>
                  {/*items */}
                  <div className="work-btns-box">
                  <div className="row">
                    
                    {this.state.workItems.map(({node}, i) => {
                      return(
                        <button key={node.id} className="col-10 col-md-3 work-btn"
                        onClick={() => this.workBtnHandler({node})}>
                          <div className="work-img-box">
                            <Img fluid={node.workThumpnail.fluid} className="work-img fadeinn"/>
                          </div>
                        </button>
                        
                      )

                    })}
                  </div>
                  <div className="pad-fill"></div>
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
            </div>
            <div className={"btn-info-box " + this.state.btn1Switch}>
              <div className="row">
                <div className="service-close-btn">
                  <button onClick={this.workCloseHandler}>
                  X
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={workInfoBG} alt="Info Backgroud1"/>
                </div>
                <div className="info2-container">
                  <h1>hello</h1>
                  <p key={this.state.currentNode.id}>{/*{this.state.currentNode.workText1.workText1}*/}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"container-fluid  work-info-box " + this.state.workInfoSwitch}>
        <div className="row">
          <div className={"overflow-hidden " + this.state.css}>
          <div className="logo-k4ws">
            <Link to="/">
              <img src={klogo} alt="Logo"/>
            </Link>
            </div>
            <div className="toggle-btn">
              <button style={{color: "transparent"}}>
              <FaMapMarkerAlt />
              </button>
              <button onClick={this.navbarHandler}>
              <FaBars />
              </button>
            </div>
            <div>
              <div className="hero-bg">
                {/*<img src={workBG} alt="Work Backgroud"/>*/}


       
              </div>
            </div>
            <div className="btn-info-box btn-info-on">
              <div className="row">
                <div className="service-close-btn">
                  <button onClick={this.workCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="work-info-bg">
                  <img src={workInfoBG} alt="Info Backgroud1" className="info-bg1"/>
                  <img src={workInfoBGm} alt="Info Backgroudm" className="info-bg-m"/>
                </div>
                <div className="work-info-container">
                  
                  <div className={this.state.infoTextBoxCss}>
                    <div className="row">
                    <div className="work-info-p1box">
                    <p key={this.state.currentNode?.id} className="">{this.state.currentNode?.workText1?.workText1}</p>
                    </div>
                    <div className="work-info-logo">
                    <Img fluid={this.state.currentNode?.workLogo?.fluid == null ? "s" : this.state.currentNode.workLogo.fluid} className=""/>
                    </div>
                    
                    </div>
                    <div className="work-info-p2box">
                    <p key={this.state.currentNode?.id} className="">{this.state.currentNode?.workText2?.workText2}</p>
                    </div>
                    <div className="order-box">
                    <AniLink fade to="/contact">
                     <button className="order-now-btn"> اطلب الان</button>
                    </AniLink>
                    </div>
                  </div>
                  <div className="work-info-image-box">
                  <Slider {...settings}>
                <div>
                
                <Img fluid={this.state.currentNode?.workSlider1?.fluid == null ? "s" : this.state.currentNode.workSlider1.fluid} className="work-info-image fadeinn"/>
                </div>
                <div>
                <Img fluid={this.state.currentNode?.workSlider2?.fluid == null ? "s" : this.state.currentNode.workSlider2.fluid} className="work-info-image fadeinn"/>
                </div>
                <div>
                <Img fluid={this.state.currentNode?.workSlider3?.fluid == null ? "s" : this.state.currentNode.workSlider3.fluid} className="work-info-image fadeinn"/>
                </div>
              
                
              </Slider>
                  {/*<Img fluid={this.state.currentNode?.image?.fluid == null ? "s" : this.state.currentNode.image.fluid} className="work-info-image fadeinn"/>*/}
            
                  {/*<Img fluid={this.state.currentNode.image.fluid} className="work-info-image"/>*/}
                  </div>
                  
                  {appcheck === 'تطبيقات' ? (
                      <div className="app-box">
                        <a href={this.state.currentNode?.googlePlayLink}>
                        <button className="app-btn"><div><img src={gplay} alt=""/></div></button>
                        </a>
                        <a href={this.state.currentNode?.appStoreLink}>
                        <button className="app-btn"><div><img src={appstore} alt=""/></div></button>
                        </a>
                      </div> 
                   ) : (
                    <div className="app-box web-box">
                    <a href={this.state.currentNode?.webSiteLink}>
                    <button className="app-btn"><div className="web-btn"><img src={wwweb} alt=""/></div></button>
                    </a>
                    <a href={this.state.currentNode?.webSiteLink}>
                    <button className="web-btn-m"> زيارة الموقع</button>
                    </a>
                    </div>
                    
                    )
                  }
                  
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
