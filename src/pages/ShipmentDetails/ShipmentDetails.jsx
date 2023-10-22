import React from "react";
import "./ShipmentDetails.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DataTable from "../../components/DataTable/DataTable";
import { useTranslation } from "react-i18next";
import { BsFillBagCheckFill } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { FaTruckFast } from "react-icons/fa6";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import reportIMG from "../../assets/img/report.png";

export default function ShipmentDetails() {
  const { t } = useTranslation();
  const shipmentData = useSelector((state) => state.order);
  console.log(shipmentData);

  const shipmentEventsRow =
    shipmentData?.shipment_transitEvents?.length > 0 &&
    shipmentData?.shipment_transitEvents?.map((transit, index) => {
      return {
        mapKey: index,
        [t(`hub`)]: transit?.hub || "-",
        [t(`date`)]: new Date(transit?.timestamp).toLocaleDateString(),
        [t(`time`)]: new Date(transit?.timestamp).toLocaleTimeString(),
        [t("details")]: t(`${transit?.state}`),
        rowClick: () => {
          console.log(transit);
        },
      };
    });

  const shipmentMainData = [
    {
      title: t(`shipmentNumber`).concat(" ", shipmentData?.shipment_number),
      text: t(`${shipmentData?.shipment_currentStatus?.state}`),
    },
    {
      title: t(`lastUpdate`),
      text: new Date(
        shipmentData?.shipment_currentStatus?.timestamp
      ).toLocaleString(),
    },
    {
      title: t(`provider`),
      text: shipmentData?.shipment_provider,
    },
    {
      title: t(`deliverDate`),
      text: new Date(shipmentData?.shipment_promisedDate).toLocaleDateString(),
    },
  ];

  const shipmentGraphData = [
    {
      state: 1,
      icon: <GoChecklist className="text-xl inline-block" />,
      title: t(`TICKET_CREATED`),
    },
    {
      state: 2,
      icon: <BsFillBagCheckFill className="text-xl inline-block" />,
      title: t(`PACKAGE_RECEIVED`),
    },
    {
      state: 3,
      icon: <FaTruckFast className="text-xl inline-block" />,
      title: t(`OUT_FOR_DELIVERY`),
    },
    {
      state: 4,
      icon: <AiOutlineDeliveredProcedure className="text-xl inline-block" />,
      title: t(`DELIVERED`),
    },
  ];

  const determineShipmentState = (shipmentState, currentState) => {
    let shipmentStateNumber;
    switch (shipmentState) {
      case `TICKET_CREATED`:
        shipmentStateNumber = 1;
        break;
      case `PACKAGE_RECEIVED`:
        shipmentStateNumber = 2;
        break;
      case `OUT_FOR_DELIVERY`:
        shipmentStateNumber = 3;
        break;
      case `DELIVERED`:
        shipmentStateNumber = 4;
        break;
      default:
        shipmentStateNumber = 3;
        break;
    }

    if (shipmentState === "DELIVERED") {
      return "completed";
    } else if (shipmentState === "CANCELLED" && currentState < 4) {
      return "canceled";
    } else {
      return shipmentStateNumber;
    }
  };

  return (
    <section className="shipment-data container mx-auto lg:p-16 p-4">
      <div className="shipment-data-wrapper">
        <div className="main-data py-4 px-7 grid lg:grid-cols-4 grid-cols-2 gap-4">
          {shipmentMainData.map((data, index) => (
            <div key={index}>
              <p>{data.title}</p>
              <h4 className="mt-2">{data.text}</h4>
            </div>
          ))}
        </div>
        <div className="shipment-track-line py-4 px-7 flex lg:grid-cols-4 grid-cols-2">
          {shipmentGraphData.map((shipment, index) => {
            return (
              <div
                key={index}
                className={`step block w-full mb-7 text-center ${
                  determineShipmentState(
                    shipmentData?.shipment_currentStatus?.state,
                    shipment?.state
                  ) >= shipment?.state
                    ? "waiting"
                    : determineShipmentState(
                        shipmentData?.shipment_currentStatus?.state,
                        shipment?.state
                      )
                }`}
              >
                <div
                  className={`step-icon-wrap flex justify-center items-center m-auto relative w-full h-20 text-center`}
                >
                  <div className="step-icon inline-block relative w-[60px] h-[60px] rounded-full bg-transparent">
                    {determineShipmentState(
                      shipmentData?.shipment_currentStatus?.state
                    ) === "completed" ||
                    (determineShipmentState(
                      shipmentData?.shipment_currentStatus?.state,
                      shipment?.state
                    ) === "canceled" &&
                      shipment?.state < 3) ? (
                      <AiOutlineCheck />
                    ) : (
                      shipment.icon
                    )}
                  </div>
                </div>
                <h4 className="step-title">{shipment.title}</h4>
                <small className="text-muted text-sm">{shipment.date}</small>
              </div>
            );
          })}
        </div>
      </div>
      <div className="shipment-details-wrapper grid lg:grid-cols-2 grid-cols-1 gap-7 mt-10 w-full">
        <div className="shipment-details">
          <h4 className="mb-4">{t(`shipmentDetails`)}</h4>
          <DataTable
            tableColumns={[t("hub"), t("date"), t("time"), t("details")]}
            tableRows={shipmentEventsRow}
            mapKey={"mapKey"}
          />
        </div>
        <div className="shipment-address">
          <h4 className="mb-4">{t(`shipmentAddress`)}</h4>
          <div className="address-details p-6 bg-gray-100 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            architecto culpa explicabo quisquam odit eius quas, facere tempora
            adipisci laborum aspernatur nisi sunt. Ex illum necessitatibus
            veritatis delectus aliquam ipsa.
          </div>
          <div className="shipment-issues mt-6 border-2 border-gray-200 rounded-lg text-center">
            <div className="py-6 px-4 md:py-8 md:px-16 flex items-center gap-[70px]">
              <div className="w-[72px] h-[72px] md:w-[120px] md:h-[120px]">
                <img className="w-full h-full" src={reportIMG} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">
                  {t(`shipmentProblem`)}
                </h4>
                <button className="report-issue-btn bg-red-500 text-white py-2 px-10 rounded-lg w-full">
                  {t(`reportIssue`)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
