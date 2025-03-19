import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // استيراد useLocation
import { Link as ScrollLink } from "react-scroll"; // استيراد Link من react-scroll
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./NavBar.css";

import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { and } from "three/tsl";
export default function NavigationBar({ showIcons}) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation(); // الحصول على المسار الحالي
  const closeNavbar = () => {
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
  };

  // التحقق إذا كنا في صفحة "/latestNews"
  const isOnLatestNewsPage = location.pathname === "/latestNews";
  const isOnAboutPage=location.pathname ==="/";

  const black = () =>{

    localStorage.setItem("color","#000000")
    window.location.reload();
  }

  
  const white = () =>{

    localStorage.setItem("color","#FFFFFF")
    window.location.reload();
  }

  const mycolor=localStorage.getItem('color')
  let colorNavBar;
  {mycolor == "#FFFFFF" ? colorNavBar="#000000" : colorNavBar="#FFFFFF"}
  

  return (
    <Navbar expand="lg" className="me-navbar">
      <Navbar.Brand href="/" className="me-navbar-logo">
        <h2 style={{color:colorNavBar}}>Dental clinic</h2>
      </Navbar.Brand>
      { isOnAboutPage &&(
        <>
          <FaMoon onClick={black} style={{color:colorNavBar,fontSize:"24px"}}/>,
          <IoSunnyOutline onClick={white}  style={{color:colorNavBar,fontSize:"24px",marginLeft:"20px"}}/>
        </>
      )}
  
    
      <Navbar.Toggle
        style={{backgroundColor:"green"}}
        aria-controls="basic-navbar-nav"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      />
      
      <Navbar.Collapse
        id="basic-navbar-nav"
        className={isNavbarOpen ? "basic-navbar-nav show" : "basic-navbar-nav not-show"}
      >
        <Nav className="ml-auto me-navbar-links" style={{colorNavBar}}>
          {/* ✅ زر الصفحة الرئيسية يظهر فقط في صفحة الأخبار */}
          {isOnLatestNewsPage ? (
            <>
            <Nav.Item>
              <Link to="/" className="me-navbar-link" onClick={closeNavbar} style={{colorNavBar}}>
                Home Page
              </Link>
            </Nav.Item>
      
           </>
        ) : (
            <>
              {/* بقية الأزرار تظهر فقط عندما لا نكون في صفحة الأخبار */}
              <Nav.Item>
                <Link
                  to="/"
                 
                  duration={500}
                  className="me-navbar-link"
                  style={{colorNavBar}}
                  onClick={closeNavbar}
                >
                  Home Page
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="about"
                  
                  duration={500}
                  style={{colorNavBar}}
                  className="me-navbar-link"
                  onClick={closeNavbar}
                >
                  Who is Me ?
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="service"
                
                  duration={500}
                  style={{colorNavBar}}
                  className="me-navbar-link"
                  onClick={closeNavbar}
                >
                  My Services
                </Link>
              </Nav.Item>
              <Nav.Item>
                <ScrollLink
                  to="Footer"
                  smooth="true"
                  style={{colorNavBar}}
                  duration={500}
                  className="me-navbar-link"
                  onClick={closeNavbar}
                >
                  Contact programmer
                </ScrollLink>
              </Nav.Item>
  
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}
