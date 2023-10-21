import { useEffect, useState } from "react";
import { switchLang } from "../../helpers/lang";
import "./LanguageSwitch.scss";

const LanguageSwitch = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang"));

  const changeLanguageHandler = () => {
    if (localStorage.getItem("i18nextLng") === "ar") {
      switchLang("en");
      setLang("en");
    } else {
      switchLang("ar");
      setLang("ar");
    }
  };

  useEffect(() => {}, [lang]);
  return (
    <li
      className="language-container list-item text-red-500"
      onClick={changeLanguageHandler}
    >
      {localStorage.getItem("i18nextLng") === "ar" ? (
        <>
          <div className="lang-title">EN</div>
        </>
      ) : (
        <>
          <div className="lang-title font-poppins">عربي</div>
        </>
      )}
    </li>
  );
};

export default LanguageSwitch;
