import React from "react"
//import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";






import arrow1 from "../../images/arrow1.png"
import arrow2 from "../../images/arrow2.png"
import arrow3 from "../../images/arrow3.png"
import iconHome from "../../images/icon-home.png"
import iconServ from "../../images/icon-serv.png"
import iconWork from "../../images/icon-work.png"
import iconWho from "../../images/icon-who.png"
import iconCall from "../../images/icon-call.png"
import whatsappIcon from "../../images/whatsapp-logo3.png"







export default function Navbar() {
  return (
    
    <div className="container-fluid">
      <div className="row">
        <div className="bg">
        

        </div>
      <div className="right-btns inner col-12">
        <div className="col-2"> </div>
        <ul className="btn-list nav-list">
          <li>
            <AniLink fade to="/">
            <button className="btn-nav"> <img src={iconHome} alt=""/>الرئيسية</button>
            </AniLink>
          </li>
          <li>
            <div className="btn-arrow1"><img src={arrow1} alt=""/></div>
            
          </li>
          <li>
            <AniLink fade to="/service">
            <button className="btn-nav btn-margin"><img src={iconServ} alt=""/> خدماتـنا</button>
            </AniLink>
          </li>
          <li>
            <div className="btn-arrow2"><img src={arrow2} alt=""/></div>
            
          </li>
          <li>
            <AniLink fade to="/work">
            <button className="btn-nav"><img src={iconWork} alt=""/> اعمالـنا</button>
            </AniLink>
          </li>
          <li>
            <div className="btn-arrow3"><img src={arrow3} alt=""/></div>
            
          </li>
          <li>
            <AniLink fade to="/about">
            <button className="btn-nav btn-margin"><img src={iconWho} alt=""/> من نحن </button>
            </AniLink>
          </li>
          <li>
            <div className="btn-arrow4"><img src={arrow2} alt=""/></div>
            
          </li>
          <li>
            <AniLink fade to="/contact">
            <button className="btn-nav"><img src={iconCall} alt=""/> اتصل بنا</button>
            </AniLink>
          </li>
        </ul>
        <ul className="btn-list nav-list-m">
        <li>
            <AniLink fade to="/contact">
            <button className="btn-nav"><img src={iconCall} alt=""/> اتصل بنا</button>
            </AniLink>
          </li>
          <li>
            <AniLink fade to="/about">
            <button className="btn-nav btn-margin"><img src={iconWho} alt=""/> من نحن </button>
            </AniLink>
          </li>
          <li>
            <AniLink fade to="/work">
            <button className="btn-nav"><img src={iconWork} alt=""/> اعمالـنا</button>
            </AniLink>
          </li>
        <li>
            <AniLink fade to="/service">
            <button className="btn-nav btn-margin"><img src={iconServ} alt=""/> خدماتـنا</button>
            </AniLink>
          </li>
          <li>
            <AniLink fade to="/">
            <button className="btn-nav"> <img src={iconHome} alt=""/>الرئيسية</button>
            </AniLink>
          </li>
        
       
       
    
      
        
      
       
        </ul>
        </div>
        
        


      </div>

      <div className="btn whatsapp-btn"><a href="https://wa.me/+966548252956"><img src={whatsappIcon} alt="whatsapp logo"/></a></div>
    </div>
    
  )
}

/*class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-sm">
        <Link to="/" className="navbar-brand sm-logo">
          <img src={logo} alt="logo" className="sm-logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item ml-sm-5">
              <FaCartArrowDown className="cart-icon" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}*/