import React from "react";
import { logoLight } from "../../../assets/svg";
import Svg from "../../atoms/Svg/Svg";
import Button from "../../atoms/Button/Button";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer className="footer flex flex__justify--space-between flex__align--center py--40 px--16">
      <Svg icon={logoLight} />
      <Button
        children={"Get Started"}
        className=" border-radius--28 py--12 px--24"
      />
    </footer>
  );
};

export default Footer;
