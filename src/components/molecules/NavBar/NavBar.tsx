import React from "react";
import Svg from "../../atoms/Svg/Svg";
import { logoDark } from "../../../assets/svg";
import Button from "../../atoms/Button/Button";
import "./_navbar.scss";

const NavBar = () => {
  return (
    <nav className="navbar flex flex__align--center flex__justify--space-between mb--40">
      <Svg icon={logoDark} />
      <Button
        className="border-radius--28 px--24 py--12"
        children={"Get Started"}
        type="button"
        ariaLabel="Get Started button"
      />
    </nav>
  );
};

export default NavBar;
