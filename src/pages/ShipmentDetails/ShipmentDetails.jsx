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
        [t("details")]: transit?.state,
        rowClick: () => {
          console.log(transit);
        },
      };
    });

  const shipmentGraphData = [
    {
      icon: <GoChecklist className="text-xl inline-block" />,
      title: "Shipment created",
      date: "Waiting...",
    },
    {
      icon: <BsFillBagCheckFill className="text-xl inline-block" />,
      title: "Package received",
      date: "Waiting...",
    },
    {
      icon: <FaTruckFast className="text-xl inline-block" />,
      title: "Out for delivery",
      date: "Waiting...",
    },
    {
      icon: <AiOutlineDeliveredProcedure className="text-xl inline-block" />,
      title: "Delivered",
      date: "Waiting...",
    },
  ];
  return (
    <section className="shipment-data container mx-auto p-16">
      <div className="shipment-data-wrapper">
        <div className="main-data py-4 px-7 grid lg:grid-cols-4 grid-cols-2 gap-4">
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
        <div className="shipment-track-line py-4 px-7 grid lg:grid-cols-4 grid-cols-2">
          {shipmentGraphData.map((shipment, index) => {
            return (
              <div key={index} className={`step block w-full mb-7 text-center`}>
                <div
                  className={`step-icon-wrap flex justify-center items-center m-auto relative w-full h-20 text-center`}
                >
                  <div className="step-icon inline-block relative w-[60px] h-[60px] rounded-full bg-transparent">
                    {shipment.icon}
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
          <h4 className="mb-4">Shipment details</h4>
          <DataTable
            tableColumns={["hub", "date", "time", "details"]}
            tableRows={shipmentEventsRow}
            mapKey={"mapKey"}
          />
        </div>
        <div className="shipment-address">
          <h4 className="mb-4">Shipment address</h4>
          <div className="address-details p-6 bg-gray-100 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            architecto culpa explicabo quisquam odit eius quas, facere tempora
            adipisci laborum aspernatur nisi sunt. Ex illum necessitatibus
            veritatis delectus aliquam ipsa.
          </div>
          <div className="shipment-issues mt-6 border-2 border-gray-200 rounded-lg text-center">
            <div className="py-8 px-52">
              <h4 className="font-bold text-lg mb-2 w-full">
                Any problem with your shipment?!
              </h4>
              <button className="report-issue-btn bg-red-500 text-white py-2 px-10 rounded-lg w-full">
                Report issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
