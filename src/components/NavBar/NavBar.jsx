import React from "react";
import "./NavBar.scss";

import BostaLogo from "../../assets/svg/bosta-logo.svg";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="container mx-auto flex items-center justify-between relative">
        <div className="logo-container">
          <img src={BostaLogo} alt="Bosta" />
        </div>
        <ul className="main-menu flex items-center gap-12">
          <li className="list-item">Home</li>
          <li className="list-item">Pricing</li>
          <li className="list-item">Sales</li>
        </ul>
        <ul className="sub-menu flex items-center gap-12">
          <li className="list-item list-item__track-shipment">
            Track Shipment
          </li>
          <li className="list-item">Login</li>
          <li className="list-item text-red-500">ENG</li>
        </ul>
      </nav>
    </div>
  );
}
