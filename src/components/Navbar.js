import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo01.png";
import "../style.css";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

function Navbar() {
  const linkRefs = useRef([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
  const location = useLocation();

  // GSAP hover animations for links
  useEffect(() => {
    const createHoverAnimation = (link) => {
      const hoverAnimation = gsap.timeline({ paused: true });

      hoverAnimation.to(link, {
        backgroundPosition: "0% 100%",
        duration: 0.2,
        ease: "power2.inOut",
      });

      link.addEventListener("mouseenter", () => hoverAnimation.play());
      link.addEventListener("mouseleave", () => hoverAnimation.reverse());
    };

    linkRefs.current.forEach(createHoverAnimation);
  }, [linkRefs]);

  // Scroll listener to toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setShowNavbar(window.scrollY > 50);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className={`nav ${showNavbar ? "visible" : "hidden"}`}>
      <div className="links">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          {/* Home link */}
          <li>
            <Link
              to="/"
              ref={(el) => (linkRefs.current[0] = el)}
              className="animated-link"
            >
              Home
            </Link>
          </li>
          {/* Services dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <span className="animated-link">Services</span>
            <ul
              className={`dropdown-menu ${
                dropdownVisible ? "open" : "closed"
              }`}
            >
              <li>
                <Link to="/automation">Automation Systems</Link>
              </li>
              <li>
                <Link to="/smart">Smart Products</Link>
              </li>
              <li>
                <Link to="/software">Software Solutions</Link>
              </li>
            </ul>
          </li>
          {/* Other links */}
          {["/Solutions", "/Projects", "/About"].map((path, index) => (
            <li key={index + 1}>
              <Link
                to={path}
                ref={(el) => (linkRefs.current[index + 1] = el)}
                className="animated-link"
              >
                {path.replace("/", "")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="btn01">
          <Link to="/contact">Contact Us</Link>
        </button>
        <button>
          <Link to="/quote">Request Quote</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;