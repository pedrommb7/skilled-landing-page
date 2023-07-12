import React, { FC } from "react";
import Heading from "../../atoms/Heading/Heading";
import Anchor from "../../atoms/Anchor/Anchor";
import { FooterProps } from "./types";
import "./_footer.scss";

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <section className="footer__product">
        <Heading className="mt--40 mb--24" type={"h6"} text={"Product"} />
        <Anchor href={"#"} children={"Overview"} />
        <Anchor href={"#"} children={"Pricing"} />
        <Anchor href={"#"} children={"Marketplace"} />
        <Anchor href={"#"} children={"Features"} />
        <Anchor href={"#"} children={"Integration"} />
      </section>
      <section className="footer__company">
        <Heading className="mt--40 mb--24" type={"h6"} text={"Company"} />
        <Anchor href={"#"} children={"About"} />
        <Anchor href={"#"} children={"Team"} />
        <Anchor href={"#"} children={"Products"} />
        <Anchor href={"#"} children={"Careers"} />
      </section>
      <section className="footer__connect">
        <Heading className="mt--40 mb--24" type={"h6"} text={"Connect"} />
        <Anchor href={"#"} children={"Contact"} />
        <Anchor href={"#"} children={"Newsletter"} />
        <Anchor href={"#"} children={"LinkedIn"} />
      </section>
    </footer>
  );
};

export default Footer;
