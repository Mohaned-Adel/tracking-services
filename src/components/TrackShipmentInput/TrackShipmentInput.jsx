import React from "react";
import "./TrackShipmentInput.scss";
import { useTranslation } from "react-i18next";
import { BsSearch } from "react-icons/bs";

export default function TrackShipmentInput({
  isError = false,
  setIsError = () => {},
  trackNumber = "",
  setTrackNumber = () => {},
  getTrackNumberHandler = () => {},
}) {
  const { t } = useTranslation();
  return (
    <>
      <h4 className="shipment-number__title">{t(`trackYourShipment`)}</h4>
      <div className="shipment-number__tracking-number flex items-center justify-between w-full relative">
        <input
          type="text"
          className={`shipment-input flex-1 p-5 ${
            isError ? "!border-red-500" : ""
          }`}
          placeholder={t(`trackingNumberInput`)}
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
          <span className="errorMessage absolute -bottom-8 left-0 text-red-500">
            {t(`You should provide a valid number`)}
          </span>
        )}
      </div>
    </>
  );
}
