import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";
import imageHeroMobile from "../../../assets/img/image-hero-mobile.webp";
import "./_calltoaction.scss";

const CallToAction = () => {
  return (
    <section className="callToAction">
      <Heading
        type={"h1"}
        text={"Maximize skill, minimize budget"}
        className="mb--24"
      />
      <Paragraph
        text={
          "Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want."
        }
        className="mb--24"
      />
      <Button
        className="border-radius--31 px--40 py--16"
        children={"Get Started"}
        type="button"
        ariaLabel="Get Started button"
      />
      <div className="flex flex__justify--center">
        <img src={imageHeroMobile} alt="hero mobile" />
      </div>
    </section>
  );
};

export default CallToAction;
