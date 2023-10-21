import React from "react";
import "./ShipmentDetails.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ShipmentDetails() {
  const shipmentData = useSelector((state) => state.order);
  console.log(shipmentData);
  return (
    <section className="shipment-details container mx-auto p-16">
      <div className="shipment-details-wrapper">
        <div className="main-details py-4 px-7 grid lg:grid-cols-4 grid-cols-2 gap-4">
          <div>
            <p>Shipment number {shipmentData?.shipment_number}</p>
            <h4>{shipmentData?.shipment_currentStatus?.state}</h4>
          </div>
          <div>
            <p>Last update</p>
            <h4>
              {new Date(
                shipmentData?.shipment_currentStatus?.timestamp
              ).toLocaleString()}
            </h4>
          </div>
          <div>
            <p>Provider</p>
            <h4>{shipmentData?.shipment_provider}</h4>
          </div>
          <div>
            <p>Deliver Date</p>
            <h4>
              {new Date(
                shipmentData?.shipment_promisedDate
              ).toLocaleDateString()}
            </h4>
          </div>
        </div>
        <div className="shipment-track-line py-4 px-7">
          <h1>TODO</h1>
        </div>
      </div>
    </section>
  );
}
