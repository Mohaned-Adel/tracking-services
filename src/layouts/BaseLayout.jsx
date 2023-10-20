import React from "react";
import "./BaseLayout.scss";
import NavBar from "../components/NavBar/NavBar";
import UserRoutes from "../routes/UserRoutes";

export default function BaseLayout() {
  return (
    <div className="base-layout min-h-screen">
      <NavBar />

      <UserRoutes />
    </div>
  );
}
