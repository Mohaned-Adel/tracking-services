import React from "react";
import "./ShipmentNumber.scss";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function ShipmentNumber() {
  return (
    <div className="shipment-number flex items-center flex-col py-5">
      <h4 className="shipment-number__title">Track your shipment</h4>
      <div className="shipment-number__tracking-number flex items-center justify-between w-full">
        <input
          type="text"
          className="shipment-input flex-1 p-5"
          placeholder="Tracking No."
        />
        <span className="input-group-addon text-white bg-red-500">
          <button className="input-btn flex items-center justify-center text-2xl">
            <BsSearch />
          </button>
        </span>
      </div>
    </div>
  );
}
