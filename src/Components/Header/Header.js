import React, { useEffect, useState, useContext, useRef, memo } from "react";

//Libraries
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import useOnClickOutside from "../../Functions/UseOnClickOutside";
import { useScroll } from "framer-motion";

//Context
import GlobalContext from "../../Context/Context";

//css
import "../../Assets/scss/layouts/_header.scss"

export const Header = memo((props) => {
  // Add Global Header Data
  const { setHeaderHeight } = useContext(GlobalContext);
  const { scrollY } = useScroll();
  const [scrollPos, setScrollPos] = useState({
    y: 0,
    prevY: -1,
    directionDown: true,
  });
  const location = useLocation()

  useEffect(() => {
    let headerEl = document.querySelector("header");

    // Calculate header height
    function setTopSpace() {
      let windowWidth = window.innerWidth,
        headerheight = (props.topSpace.desktop && props.topSpace.desktop === true) ? headerEl.offsetHeight : 0;

      if (windowWidth <= 1199 && props.topSpace.lg) {
        headerheight = props.topSpace.lg === true ? headerEl.offsetHeight : 0;
      }

      if (windowWidth <= 991 && props.topSpace.md) {
        headerheight = props.topSpace.md === true ? headerEl.offsetHeight : 0;
      }

      if (windowWidth <= 767 && props.topSpace.sm) {
        headerheight = props.topSpace.sm === true ? headerEl.offsetHeight : 0;
      }

      if (windowWidth <= 575 && props.topSpace.xs) {
        headerheight = props.topSpace.xs === true ? headerEl.offsetHeight : 0;
      }

      setHeaderHeight(headerheight);
    }

    setTopSpace();

    window.addEventListener("load", setTopSpace);
    window.addEventListener("resize", setTopSpace);

    if (document.body.classList.contains("mobile-menu")) {
      document.body.classList.remove("navbar-collapse-show")
      document.body.classList.remove("menu-modern")
      document.body.classList.remove("menu-full")
      document.body.style.removeProperty("overflow");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    let lastScrollTop = 0;
    scrollY.onChange((pos) => {
      if (pos > lastScrollTop) {
        setScrollPos({
          ...scrollPos,
          y: pos,
          prevY: pos - 1,
          directionDown: true,
        });
      } else {
        setScrollPos({
          ...scrollPos,
          y: pos,
          prevY: pos - 1,
          directionDown: false,
        });
      }

      if (pos === 0) {
        setScrollPos({ ...scrollPos, directionDown: true });
      }
      lastScrollTop = pos;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header
      className={`${props.className ? props.className : ""}${scrollPos.y > 5 ? " sticky-header" : ""}${scrollPos.directionDown === false ? " header-appear" : ""}${props.type ? ` ${props.type}` : ""
        }`}
    >
      {props.children}
    </header>
  );
});

//HeaderNav
export const HeaderNav = (props) => {
  const handleMenuToggle = () => {
    let header = document.querySelector("header"),
      menu = header.querySelector(".navbar-nav"),
      menu_item = menu.querySelectorAll(".nav-item");

    if (!document.body.classList.contains("navbar-collapse-show")) {
      document.body.classList.add("navbar-collapse-show");
    } else {
      document.body.classList.remove("navbar-collapse-show");
    }

    menu_item.forEach(function (item) {
      if (item.classList.contains("open")) {
        setTimeout(() => {
          item.classList.remove("open");
        }, 200);
      }
    });
  };

  return (
    <Navbar
      collapseOnSelect
      id="headerbar"
      expand={props.expand}
      bg={props.bg ? props.bg : "transparent"}
      variant={props.theme}
      className={`${props.menu && `menu-${props.menu}`}${props.className ? ` ${props.className}` : ""
        }${props.bg || props.bg === "transparent" ? "" : " header-transparent"}`}
      onToggle={handleMenuToggle}
    >
      <Container
        fluid={props.fluid}
        className={props.containerClass ? props.containerClass : ""}
      >
        {props.children}
      </Container>
    </Navbar>
  );
};

//HamburgerMenu
export const HamburgerMenu = memo((props) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useOnClickOutside(ref, (e) => setShow(false));

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShow(false);
      }
    };

    if (show === true) {
      document.querySelector("body").classList.add("overflow-hidden");
      document.querySelector(".push-button").classList.remove("collapsed");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
      document.querySelector(".push-button").classList.add("collapsed");
    }

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [show]);

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`header-push-button bg-transparent inline-block ${props.theme}`}
        >
          <Navbar.Toggle className={`push-button`} onClick={() => setShow(true)}>
            <div className="nav-icon">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </div>
          </Navbar.Toggle>
          <div className={`${show ? "block h-[100vh] left-0 overflow-hidden fixed top-0 w-full z-[999]" : ""}`}>
            <div
              ref={ref} className={`hamburger-menu-wrapper pos-${props.position}${show ? " show" : ""
                }${props.className ? ` ${props.className}` : ""}`}
            >
              {props.closeBtn && (
                <button aria-label="hamburger menu close button" className="close-btn" onClick={() => setShow(false)}>
                  <i className="fas fa-times"></i>
                </button>
              )}
              {show && props.children}
            </div>
          </div>
        </Navbar>
      ))}
    </>
  );
});

Header.defaultProps = {
  topSpace: {
    desktop: false,
  },
};

HeaderNav.defaultProps = {
  fluid: "lg",
  theme: "dark",
  menu: "light",
  expand: "lg",
};

HamburgerMenu.defaultProps = {
  theme: "light",
  position: "right",
  closeBtn: true,
};

// Menu.defaultProps = {
//   data: HeaderData,
// };

// MobileMenu.defaultProps = {
//   type: "full",
//   data: HeaderData,
// };

export default Header