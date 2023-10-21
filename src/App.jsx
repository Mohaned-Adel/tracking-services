import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import PublicRoutes from "./routes/PublicRoutes";
import i18n from "./locales/i18n";
import { checkFixLang, editTitle } from "./helpers/lang";

function App() {
  const lang = i18n.language;

  useEffect(() => {
    checkFixLang(lang);
    editTitle(lang);
  }, [lang]);
  return (
    <div>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
