import "./Kero.css";

import { PrimaryButtons } from "../../components/index";

const Kero = () => {
  return (
    <div className="hero-main rounded p-4">
      <div className="hero-text left">
        <h6 className="hero-subtitle text-white mb-5">Welcom To cyborg</h6>
        <h4 className="hero-title text-white fs-1 fw-bold">
          <em>Browse </em>Our Popular Games Here
        </h4>
        <PrimaryButtons>Browse Now</PrimaryButtons>
      </div>
    </div>
  );
};

export default Kero;
