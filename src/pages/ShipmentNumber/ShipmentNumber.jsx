import React, { useState } from "react";
import "./ShipmentNumber.scss";
import { Link, useNavigate } from "react-router-dom";
import shipmentServices from "../../services/shipmentServices";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useDispatch } from "react-redux";
import { orderActions } from "../../store/order-slice";
import { useTranslation } from "react-i18next";
import TrackShipmentInput from "../../components/TrackShipmentInput/TrackShipmentInput";

export default function ShipmentNumber() {
  const { t } = useTranslation();
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
        <TrackShipmentInput
          isError={isError}
          setIsError={setIsError}
          trackNumber={trackNumber}
          setTrackNumber={setTrackNumber}
          getTrackNumberHandler={getTrackNumberHandler}
        />
      </div>
    </>
  );
}
