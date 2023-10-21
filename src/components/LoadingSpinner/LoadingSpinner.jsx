import "./LoadingSpinner.scss";
import { FaSpinner } from "react-icons/fa";
export default function LoadingSpinner() {
  return (
    <div className="overlay-backdrop">
      <div className="overlay-spinner-wrapper">
        <div className="spinner">
          <FaSpinner />
        </div>
      </div>
    </div>
  );
}
