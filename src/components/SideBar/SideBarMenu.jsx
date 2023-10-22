import React from "react";
import "./SideBar.scss";
import { useTranslation } from "react-i18next";

export default function SideBar({ isOpen }) {
  const { t } = useTranslation();
  return (
    <div className={`menu menu-list__wrapper ${isOpen ? "opened" : "closed"}`}>
      <ul className="main-menu flex items-center gap-12">
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
        <li className="list-item">
          <a href="https://business.bosta.co/signin" target="_blank">
            {t(`navItem-login`)}
          </a>
        </li>
      </ul>
    </div>
  );
}
