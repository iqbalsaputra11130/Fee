import React, { useState, useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sidebars } from "../Components/Sidebars";
import "../Css/navbar.css";
import { IconContext } from "react-icons";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { BsBell } from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import { CSSTransition } from 'react-transition-group';

function Navbars(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [open, setOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar shadow-lg p-3 mb-5 bg-white rounded">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {/* <Container> */}
            <Navbar.Brand href="/">Logo</Navbar.Brand>
             <Nav className="d-flex flex-row">
              <Nav.Item className="me-3 me-lg-0">
                <Nav.Link href="#">
                <IoIcons.IoMdHelpCircle />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="me-3 me-lg-0">
                <Nav.Link href="#">
                  <BsBell />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="me-3 me-lg-0">
                <Nav.Link href="#">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                      alt="avatar"
                      className="img-fluid rounded-circle me-3"
                      width="35"
                    />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          {/* </Container> */}
        </div>

        {/* Sidebar */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu "}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle" style={{position:'relative'}}>
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Sidebars.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbars;
