import React from "react";
import BostaLogo from "../../assets/svg/bosta-logo.svg";
import BostaLogoAr from "../../assets/svg/bosta-logo-ar.svg";
import { Link } from "react-router-dom";
import i18next from "i18next";

export default function LogoSwitch() {
  const lang = i18next.language;
  return (
    <>
      <Link className="logo-container" to={"/"}>
        <img src={lang === "ar" ? BostaLogoAr : BostaLogo} alt="Bosta" />
      </Link>
    </>
  );
}
