import React, { useEffect } from 'react';
import feather from 'feather-icons';
export default function Footer() {
    useEffect(() => {
        feather.replace();
      }, []);
    
  return (
    <div>
      <footer>
        <div className="social">
          <a href="https://www.instagram.com/hadhad___________________fsttt/">
            <i data-feather="instagram"></i>
          </a>
          <a href="#k">
            {" "}
            <i data-feather="twitter"></i>
          </a>
          <a href="https://github.com/Tooomat">
            {" "}
            <i data-feather="github"></i>
          </a>
        </div>

        <div className="Menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#hobbie">Hobbie</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="credit">
          <p>
            Created by <a href="#k">Toomat</a> | &copy; 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
