import React from "react";
import "./ShipmentNumber.scss";
import { Link } from "react-router-dom";

export default function ShipmentNumber() {
  return (
    <>
      <div>ShipmentNumber</div>
      <Link to={"/shipment-details"}>Shipment Details</Link>
    </>
  );
}
