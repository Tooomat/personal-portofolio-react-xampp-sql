import React, { useEffect, useState } from "react";
import Typed from "typed.js";

export default function Navbar() {
  const [isNavbarActive, setNavbarActive] = useState(false);

  const handleMenuIconClick = (event) => {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    setNavbarActive(!isNavbarActive);
  };

  //   const handleNaviIdClick = (event) => {
  //     event.preventDefault();
  //     setNavbarActive(!isNavbarActive);
  //   };

  useEffect(() => {
    // Typed.js Effect
    const typed = new Typed(".multiple-text", {
      strings: ["Mahasiswa", "Muhammadiyah", "Malang"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <header className="header">
        <a href="#a" className="Portofolio">
          Porto
          <span className="animate" style={{ "--i": "1" }}>
            folio.
          </span>
        </a>

        <div className="bx bx-menu" id="menu-icon">
          <a
            href="#page-chose"
            id="hamburger-menu"
            onClick={handleMenuIconClick}
          >
            <i data-feather="menu"></i>
          </a>
        </div>

        <nav
          className={`navbar ${isNavbarActive ? "active" : ""}`}
          id="navi-id"
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#hobbie">Hobbie</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

          <span className="active-nav"></span>
        </nav>
      </header>
    </div>
  );
}
