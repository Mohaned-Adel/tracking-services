import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
