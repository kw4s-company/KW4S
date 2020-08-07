import React, { Component } from "react"
import serviceBG from "../../images/service02.jpg"
import infoBG0 from "../../images/work01.jpg"
//import infoBG1 from "../../images/btn101.jpg"
import info4BG from "../../images/btn401.jpg"
//import info5BG from "../../images/btn501.jpg"
import klogo from "../../images/logo-k4ws.png"
import { FaBars, FaTimes, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "gatsby"
//----work pieces------------------------------
import Img from "gatsby-image"
import workInfoBG from "../../images/work-info01.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Slider from "react-slick";
import gplay from "../../images/gplay01.png"
import appstore from "../../images/appstore01.png"
import wwweb from "../../images/wwweb08.png"
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

export default class serviceC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      css: "hero-min col-12 col-md-10",
      btnsCss: "service-text in",
      btn1Switch: "btn-info-off",
      btn2Switch: "btn-info-off",
      btn3Switch: "btn-info-off",
      btn4Switch: "btn-info-off",
      btn5Switch: "btn-info-off",
      btn6Switch: "btn-info-off",
      //----work pieces---------------------------
      items:props.items.edges,
      workItems: Array.from(props.items.edges ).filter(e => e.node.category ==='app').reverse().slice(0,2),
      
      workBtnsCss:"work-text in",
      workHeroSwitch:"show-content",
      workInfoSwitch:"hide-content",
      infoTextBoxCss:"work-info-text-box ",
      description:props.items.edges,
      currentNode:""
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

  infoCloseHandler = () => {
    this.setState({
      btn1Switch: "btn-info-off",
      btn2Switch: "btn-info-off",
      btn3Switch: "btn-info-off",
      btn4Switch: "btn-info-off",
      btn5Switch: "btn-info-off",
      btn6Switch: "btn-info-off",

      btnsCss: "service-text in",
    })
  }

  btn1Handler = () => {
    this.setState({ btn1Switch: "btn-info-on", btnsCss: "service-text fade" })
  }

  btn2Handler = () => {
    this.setState({ btn2Switch: "btn-info-on", btnsCss: "service-text fade" })
  }

  btn3Handler = () => {
    this.setState({ btn3Switch: "btn-info-on", btnsCss: "service-text fade" })
  }
  btn4Handler = () => {
    this.setState({ btn4Switch: "btn-info-on", btnsCss: "service-text fade" })
  }
  btn5Handler = () => {
    this.setState({ btn5Switch: "btn-info-on", btnsCss: "service-text fade" })
  }
  btn6Handler = () => {
    this.setState({ btn6Switch: "btn-info-on", btnsCss: "service-text fade" })
  }

  btn1xxHandler = () => {
    this.setState({ infoCss: "service-info", btnsCss: "service-text fade" })
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
                <img src={serviceBG} alt="Service Backgroud"/>

                <div className={this.state.btnsCss}>
                  <div className="row">
                    <div className="col-10 service-btn-box">
                    <button
                      className="btn-eclips btn1-eclips"
                      onClick={this.btn1Handler}
                    >
                      تصميم مواقع
                      <br />  الحــراج
                    </button>
                    <button
                      className="btn-eclips btn2-eclips"
                      onClick={this.btn2Handler}
                    >
                      تصميم و برمجة
                      <br /> المتاجر الإلكترونية
                    </button>
                 
                    <button
                      className="btn-eclips btn3-eclips"
                      onClick={this.btn3Handler}
                    >
                      تصميم كافة
                      <br /> تطبيقات الجوال
                    </button>
                    <button
                      className="btn-eclips btn4-eclips"
                      onClick={this.btn4Handler}
                    >
                      إستضـــافة
                    </button>
                 
                    <button
                      className="btn-eclips btn5-eclips"
                      onClick={this.btn5Handler}
                    >
                      تصميم مدونة
                      <br /> إلكترونية
                    </button>
                    <button
                      className="btn-eclips btn6-eclips"
                      onClick={this.btn6Handler}
                    >
                      {" "}
                      تصميم و برمجة
                      <br /> المواقع
                      <br /> الإلكترونية
                    </button>
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
            {/* ------------------------BUTTON 1 تصميم مواقع الحراج------------------- */}
            <div className={"btn-info-box " + this.state.btn1Switch}>
              <div className="row info-test">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={infoBG0} alt="Info Backgroud2"/>
                </div>
                <div className="info2-container">
                  <h1>تصميم مواقع الحراج</h1>
                  <p>
                    شركة خطاب ويب شركة تصميم متاجر الكترونية في المملكة تتمتع
                    بامكانيات
                    وخبرات كبيرة نضعها في متناول عملائنا الكرام. لماذا
                    شركة خطاب ويب أفضل شركة 
                    تصميم متاجر الكترونية في السعودية؟ نقدم في شركة خطاب ويب
                    خدمة تصميم
                    متاجر الكترونية في السعودية يتمتع بالعديد من المميزات
                    من بينها: اضافة متجرك
                    لمحركات البحث ,تدريب العميل وموظفيه مجاناً ,دعم فني
                    متميز ومتكامل ,توفير
                    نطاق مجاني بالاضافه الى مساحه غير محدوده وقواعد
                    بيانات غير قابلة للاختراق
                  </p>
                  {/*work pieces************************************/}
                  <div className="work-text-s">
                 
                  {/*items */}
                  <div className="row">
                    <div>
                  <AniLink fade to="/work">
                    <button className="more-btn"><span className="">...المزيــد </span></button>
                  </AniLink>
                    </div>
                    {this.state.workItems.map(({node}, i) => {
                      return(
                        <button key={node.id} className="col-10 col-md-5 work-btn-s"
                        onClick={() => this.workBtnHandler({node})}>
                          <div className="work-img-box-s">
                            <Img fluid={node.workIcon.fluid} className="work-img-s"/>
                          </div>
                        </button>
                        
                      )

                    })}
                  </div>

                
                </div>
                    <div className="padding-filler"></div>
              
                </div>
              </div>
            </div>
            {/* ------------------------BUTTON 2 تصميم وبرمجة المتاجر الإلكترونية------------------- */}
            <div className={"btn-info-box " + this.state.btn2Switch}>
              <div className="row info-test">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={infoBG0} alt="Info Backgroud2"/>
                </div>
                <div className="info2-container">
                  <h1>تصميم وبرمجة المتاجر الإلكترونية</h1>
                  <p>
                    شركة خطاب ويب شركة تصميم متاجر الكترونية في المملكة تتمتع
                    بامكانيات
                    وخبرات كبيرة نضعها في متناول عملائنا الكرام. لماذا
                    شركة خطاب ويب أفضل شركة 
                    تصميم متاجر الكترونية في السعودية؟ نقدم في شركة خطاب ويب
                    خدمة تصميم
                     متاجر الكترونية في السعودية يتمتع بالعديد من المميزات
                    من بينها: اضافة متجرك
                     لمحركات البحث ,تدريب العميل وموظفيه مجاناً ,دعم فني
                    متميز ومتكامل ,توفير
                    نطاق مجاني بالاضافه الى مساحه غير محدوده وقواعد
                    بيانات غير قابلة للاختراق
                  </p>
                  {/*work pieces************************************/}
                  <div className="work-text-s">
                 
                  {/*items */}
                  <div className="row">
                    <div>
                  <AniLink fade to="/work">
                    <button className="more-btn"><span className="">  ...المزيــد </span></button>
                  </AniLink>
                    </div>
                    {this.state.workItems.map(({node}, i) => {
                      return(
                        <button key={node.id} className="col-10 col-md-5 work-btn-s"
                        onClick={() => this.workBtnHandler({node})}>
                          <div className="work-img-box-s">
                            <Img fluid={node.workIcon.fluid} className="work-img-s"/>
                          </div>
                        </button>
                        
                      )

                    })}
                  </div>

                
                </div>
                <div className="padding-filler"></div>
                </div>
              </div>
            </div>
            {/* ------------------------BUTTON 3 تصميم كافة تطبيقات الجوال------------------- */}
            <div className={"btn-info-box " + this.state.btn3Switch}>
              <div className="row">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={infoBG0} alt="Info Background3"/>
                </div>
                <div className="info2-container">
                  <h1>تصميم تطبيقات الجوال</h1>
                  <p>
                    تحرص خطاب ويب على تصميم تطبيقات الجوال بشكل يسمح
                  بتحقيق الهدف منها بحيث تكون: تطبيقات متوافقة مع مختلف{" "}
                  
                    أجهزة الجوال ( آيفون – أندرويد وغيرها). ,دعم فني متكامل بعد
                   تسليم التطبيق للعميل ,ربط التطبيق بموقع الويب الخاص
                    بك ,رفع
                    التطبيقات على جوجل بلاي وآب ستور ,امكانية التعديل والتطوير
                  المستقبلي للتطبيق
                  </p>
                 {/*work pieces************************************/}
                 <div className="work-text-s">
                 
                 {/*items */}
                 <div className="row">
                   <div>
                 <AniLink fade to="/work">
                   <button className="more-btn"><span className="">  ...المزيــد </span></button>
                 </AniLink>
                   </div>
                   {this.state.workItems.map(({node}, i) => {
                     return(
                       <button key={node.id} className="col-10 col-md-5 work-btn-s"
                       onClick={() => this.workBtnHandler({node})}>
                         <div className="work-img-box-s">
                           <Img fluid={node.workIcon.fluid} className="work-img-s"/>
                         </div>
                       </button>
                       
                     )

                   })}
                 </div>

               
               </div>
               <div className="padding-filler"></div>
                </div>
              </div>
            </div>
            {/* ------------------------BUTTON 4  اســـــــــــــــــــــــــــــــتضافة -------------*/}
            <div className={"btn-info-box " + this.state.btn4Switch}>
              <div className="row">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={info4BG} alt="Info Background4" className="info4-img"/>
                  <img src={infoBG0} alt="Info Background3" className="info4-img-m"/>
                </div>
                <div className="info4-container">
                  <h1>إستضافة مواقع</h1>
                  <p>
                    تقدم شركة خطاب ويب خدمة استضافة مواقع
                  قوية لعملائها الكرام تتميز بإمكانيات مذهلة مما
                   يضمن لموقعك الالكتروني السرعة المطلوبة
               والاستمرارية للحفاظ على عملائك لكي تحصل على
                 نتائج متقدمة في ترتيب جوجل.لماذا تختاراستضافة
                 موقعك في شركة خطاب ويب؟
                  </p>
                  <p>
                    معلومات استضافتك متاحة في اي وقت تدعم استضافة المواقع
                    المقدمة من شركة خطاب ويب المنصات المختلفة بمختلف أنواع
                    البرمجيات ،فليس هناك داعي للقلق من عدم التمكن من تشغيل{" "}
                  
                    أي برنامج، أو أي ملف مهما كان، لأن شركة خطاب ويب لديها فريق
                   عمل ودعم فني متواصل 24-7
                  </p>
                  <div className="btn-estdafa">
                    <AniLink fade to="/contact">
                     <button > اطلب الان</button>
                    </AniLink>
                    </div>
                  <div className="padding-filler"></div>
                </div>
                
              </div>
            </div>
            {/* ------------------------BUTTON 5 تصميم مدونة الكترونية */}
            <div className={"btn-info-box " + this.state.btn5Switch}>
              <div className="row">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={infoBG0} alt="Info Background3"/>
                </div>
                <div className="info2-container">
                  <h1>تصميم مدونة الكترونية</h1>
                  <p>
                    تحرص خطاب ويب على تصميم تطبيقات الجوال بشكل يسمح
                     بتحقيق الهدف منها بحيث تكون: تطبيقات متوافقة مع مختلف{" "}
                    
                    أجهزة الجوال ( آيفون – أندرويد وغيرها). ,دعم فني متكامل بعد
                     تسليم التطبيق للعميل ,ربط التطبيق بموقع الويب الخاص
                    بك ,رفع 
                    التطبيقات على جوجل بلاي وآب ستور ,امكانية التعديل والتطوير
                     المستقبلي للتطبيق
                  </p>
                 {/*work pieces************************************/}
                 <div className="work-text-s">
                 
                 {/*items */}
                 <div className="row">
                   <div>
                 <AniLink fade to="/work">
                   <button className="more-btn"><span className=""> ...المزيــد </span></button>
                 </AniLink>
                   </div>
                   {this.state.workItems.map(({node}, i) => {
                     return(
                       <button key={node.id} className="col-10 col-md-5 work-btn-s"
                       onClick={() => this.workBtnHandler({node})}>
                         <div className="work-img-box-s">
                           <Img fluid={node.workIcon.fluid} className="work-img-s"/>
                         </div>
                       </button>
                       
                     )

                   })}
                 </div>

               
               </div>
               <div className="padding-filler"></div>
                </div>
              </div>
            </div>
            
           
            {/* ------------------------BUTTON 6 تصميم و برمجة جميع المواقع الالكترونية */}
            <div className={"btn-info-box " + this.state.btn6Switch}>
              <div className="row info-test">
                <div className="service-close-btn">
                  <button onClick={this.infoCloseHandler}>
                  <FaTimes />
                  </button>
                </div>
                <div className="service-info-bg">
                  <img src={infoBG0} alt="Info Background6"/>
                </div>
                <div className="info2-container">
                  <h1> تصميم مواقع إلكترونية</h1>
                  <p>
                    تتمثل خبرة خطاب ويب في تصميم موقع الكتروني في الخطوات
                    التالية: ,اتفاق مبدئي مع العميل على شكل التصميم ,اجراء كافة
                    التعديلات التي يطلبها العميل ,مراجعة الموقع والتأكد من عدم
                    وجود اي اخطاء برمجية , اختبار الموقع قبل تسليمه للعميل ,
                    تدريب العميل ومن يرغب من موظفيه على لوحة التحكم الخاصة
                    بالموقع
                  </p> <br/>
               {/*work pieces************************************/}
               <div className="work-text-s">
                 
                 {/*items */}
                 <div className="row">
                   <div>
                 <AniLink fade to="/work">
                   <button className="more-btn"><span className=""> ...المزيــد </span></button>
                 </AniLink>
                   </div>
                   {this.state.workItems.map(({node}, i) => {
                     return(
                       <button key={node.id} className="col-10 col-md-5 work-btn-s"
                       onClick={() => this.workBtnHandler({node})}>
                         <div className="work-img-box-s">
                           <Img fluid={node.workIcon.fluid} className="work-img-s"/>
                         </div>
                       </button>
                       
                     )

                   })}
                 </div>

               
               </div>
               <div className="padding-filler"></div>
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
                  <img src={workInfoBG} alt="Info Backgroud1" className="work-in-service-info-bg"/>
                </div>
                <div className="work-info-container">
                  
                  <div className={this.state.infoTextBoxCss}>
                    <div className="work-info-logo">
                    <Img fluid={this.state.currentNode?.logo?.fluid == null ? "s" : this.state.currentNode.logo.fluid} className=""/>
                    </div>
                    <div className="work-info-p1box">
                    <p key={this.state.currentNode?.id} className="">{this.state.currentNode?.description1}</p>
                    </div>
                    <div className="work-info-p2box">
                    <p key={this.state.currentNode?.id} className="">{this.state.currentNode?.description2}</p>
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
                
                <Img fluid={this.state.currentNode?.image1?.fluid == null ? "s" : this.state.currentNode.image1.fluid} className="work-info-image fadeinn"/>
                </div>
                <div>
                <Img fluid={this.state.currentNode?.image2?.fluid == null ? "s" : this.state.currentNode.image2.fluid} className="work-info-image fadeinn"/>
                </div>
                <div>
                <Img fluid={this.state.currentNode?.image3?.fluid == null ? "s" : this.state.currentNode.image3.fluid} className="work-info-image fadeinn"/>
                </div>
              
                
              </Slider>
                  {/*<Img fluid={this.state.currentNode?.image?.fluid == null ? "s" : this.state.currentNode.image.fluid} className="work-info-image fadeinn"/>*/}
            
                  {/*<Img fluid={this.state.currentNode.image.fluid} className="work-info-image"/>*/}
                  </div>
                  {appcheck === 'app' ? (
                      <div className="app-box">
                        <button className="app-btn"><div><img src={gplay} alt=""/></div></button>
                        <button className="app-btn"><div><img src={appstore} alt=""/></div></button>  
                      </div> 
                   ) : (
                    <div className="app-box web-box">
                    <button className="app-btn"><div className="web-btn"><img src={wwweb} alt=""/></div></button>
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
