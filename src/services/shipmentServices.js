import Axios from "./Axios";

let shipmentServices = {
  getShipmentByTrackNumber: async function (trackNumber = "") {
    const response = await Axios.get(`shipments/track/${trackNumber}`);
    return response;
  },
};

export default shipmentServices;
