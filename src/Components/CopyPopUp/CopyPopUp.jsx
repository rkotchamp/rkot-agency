import { useEffect } from "react";
import "./CopyPopUp.css";

function CopyPopUp({ unMount }) {
  useEffect(() => {
    const timer = setTimeout(() => {}, 3000);
    return () => clearTimeout(timer);
  }, [unMount]);
  return (
    <div className="popUp-container">
      <p>Copied</p>
      <div className="animatedLine"></div>
    </div>
  );
}

export default CopyPopUp;
