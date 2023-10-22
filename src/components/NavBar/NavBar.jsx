import React, { useState } from "react";
import "./NavBar.scss";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useTranslation } from "react-i18next";
import LogoSwitch from "../LogoSwitch/LogoSwitch";
import TrackShipmentSwitch from "../TrackShipmentSwitch/TrackShipmentSwitch";
import { MenuToggle } from "../SideBar/MenuToggle";
// import SideBar from "../Sidebar/SideBar";

export default function NavBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-bar">
      <nav className="container mx-auto flex items-center justify-between relative">
        <LogoSwitch />
        <ul className="main-menu lg:flex hidden items-center gap-12">
          <li className="list-item ">
            <a href="https://bosta.co/ar-eg/home" target="_blank">
              {t("navItem-home")}
            </a>
          </li>
          <li className="list-item">
            <a href="https://bosta.co/ar-eg/pricing" target="_blank">
              {t(`navItem-pricing`)}
            </a>
          </li>
          <li className="list-item">
            <a href="https://bosta.co/en-eg/business" target="_blank">
              {t(`navItem-sales`)}
            </a>
          </li>
        </ul>
        <ul className="sub-menu flex items-center">
          {/* <TrackShipmentSwitch /> */}
          <li className="list-item lg:block hidden">
            <a href="https://business.bosta.co/signin" target="_blank">
              {t(`navItem-login`)}
            </a>
          </li>
          <LanguageSwitch />
          <li className="list-item lg:hidden">
            <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            {/* <SideBar isOpen={isOpen} /> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}
