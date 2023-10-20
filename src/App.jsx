import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import ShipmentNumber from "./pages/ShipmentNumber/ShipmentNumber";
import ShipmentDetails from "./pages/ShipmentDetails/ShipmentDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ShipmentNumber />} />
        <Route path="/shipment-details" element={<ShipmentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
