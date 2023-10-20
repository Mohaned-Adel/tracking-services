import React from "react";
import { Navigate, Route, Routes } from "react-router";
import ShipmentNumber from "../pages/ShipmentNumber/ShipmentNumber";
import ShipmentDetails from "../pages/ShipmentDetails/ShipmentDetails";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={"/shipment-number"} />} />
      <Route path="/*" element={<Navigate replace to={"/shipment-number"} />} />
      <Route path="/shipment-number" element={<ShipmentNumber />} />
      <Route path="/shipment-details" element={<ShipmentDetails />} />
    </Routes>
  );
}
