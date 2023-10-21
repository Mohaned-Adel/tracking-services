import React, { useState } from "react";
import "./ShipmentNumber.scss";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import shipmentServices from "../../services/shipmentServices";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useDispatch } from "react-redux";
import { orderActions } from "../../store/order-slice";

export default function ShipmentNumber() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [trackNumber, setTrackNumber] = useState("");
  const [isError, setIsError] = useState(false);

  async function getTrackNumberHandler() {
    if (trackNumber === "") {
      setIsError(true);
      return;
    }
    setLoading(true);
    console.log(trackNumber);
    try {
      const { data } = await shipmentServices.getShipmentByTrackNumber(
        trackNumber
      );
      console.log(data);
      setLoading(false);

      dispatch(
        orderActions.updateOrderNumber({
          shipment_number: data?.TrackingNumber,
          shipment_currentStatus: data?.CurrentStatus,
          shipment_provider: data?.provider,
          shipment_promisedDate: data?.PromisedDate,
          shipment_transitEvents: data?.TransitEvents,
        })
      );

      setTimeout(() => {
        navigate("/shipment-details");
      }, 400);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsError(true);
    }
  }

  return (
    <>
      {loading && <LoadingSpinner />}
      <div className="shipment-number flex items-center flex-col py-5">
        <h4 className="shipment-number__title">Track your shipment</h4>
        <div className="shipment-number__tracking-number flex items-center justify-between w-full relative">
          <input
            type="text"
            className={`shipment-input flex-1 p-5 ${
              isError ? "!border-red-500" : ""
            }`}
            placeholder="Tracking No."
            value={trackNumber}
            onChange={(e) => {
              if (isError) {
                setIsError(false);
              }
              setTrackNumber(e.target.value);
            }}
          />
          <span className="input-group-addon text-white bg-red-500">
            <button
              className="input-btn flex items-center justify-center text-2xl"
              onClick={getTrackNumberHandler}
            >
              <BsSearch />
            </button>
          </span>
          {isError && (
            <span className="absolute -bottom-8 left-0 text-red-500">
              You should provide a valid number
            </span>
          )}
        </div>
      </div>
    </>
  );
}
