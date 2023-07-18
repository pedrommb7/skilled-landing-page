import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";
import imageHeroMobile from "../../../assets/img/image-hero-mobile.webp";
import imageHeroTablet from "../../../assets/img/image-hero-tablet.webp";
import imageHeroDesktop from "../../../assets/img/image-hero-desktop.webp";
import "./_calltoaction.scss";

const CallToAction = () => {
  return (
    <section className="callToAction">
      <div className="callToAction__container">
        <div className="callToAction__container__text">
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
            className="border-radius--31 mb--40 px--40 py--16"
            children={"Get Started"}
            type="button"
            ariaLabel="Get Started button"
          />
        </div>

        <picture className="callToAction__container__imgHero flex flex__justify--center">
          <img
            src={imageHeroMobile}
            alt="hero mobile"
            className="callToAction__container__imgHero__mobile"
          />
          <img
            src={imageHeroTablet}
            alt="hero mobile"
            className="callToAction__container__imgHero__tablet"
          />
          <img
            src={imageHeroDesktop}
            alt="hero mobile"
            className="callToAction__container__imgHero__desktop"
          />
        </picture>
      </div>
    </section>
  );
};

export default CallToAction;
