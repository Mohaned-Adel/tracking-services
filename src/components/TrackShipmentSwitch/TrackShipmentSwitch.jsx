import React, { useState } from "react";
import "./TrackShipmentSwitch.scss";
import { useTranslation } from "react-i18next";
import TrackShipmentInput from "../TrackShipmentInput/TrackShipmentInput";

export default function TrackShipmentSwitch() {
  const { t } = useTranslation();

  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <li
        className="list-item list-item__track-shipment relative lg:block hidden"
        onMouseEnter={() => {
          setIsShown(true);
        }}
        onMouseLeave={(e) => {
          console.log(e);
          setIsShown(false);
        }}
      >
        {t(`navItem-trackShipment`)}
        {isShown && (
          <div className="list-item__track-number absolute shipment-number flex items-center flex-col py-5">
            <TrackShipmentInput />
          </div>
        )}
      </li>
    </>
  );
}
