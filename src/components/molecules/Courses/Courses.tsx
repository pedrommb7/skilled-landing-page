import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Svg from "../../atoms/Svg/Svg";
import { iconAnimation, iconDesign } from "../../../assets/svg";
import iconPhotography from "../../../assets/svg/icon-photography.svg";
import iconCrypto from "../../../assets/svg/icon-crypto.svg";
import iconBusiness from "../../../assets/svg/icon-business.svg";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";
import "./_courses.scss";

const Courses = () => {
  return (
    <section className="courses px--16">
      <Heading
        type={"h2"}
        text={"Check out our most popular courses!"}
        className="border-radius--10 px--28 pt--24 pb--32 mb--20"
      />
      <section className="courses__animation border-radius--10 mt--40">
        <Svg
          icon={iconAnimation}
          className="courses__animation__iconAnimation ml--28"
        />

        <div className="mt--24 mx--28">
          <Heading type={"h3"} text={"Animation"} className="pt--56" />
          <Paragraph
            text={
              "Learn the latest animation techniques to create stunning motion design and captivate your audience."
            }
          />
          <Button children={"Get Started"} className="mt--32 mb--24" />
        </div>
      </section>
      <section className="courses__design border-radius--10 mt--40">
        <Svg icon={iconDesign} className="courses__design__iconDesign ml--28" />

        <div className="mt--24 mx--28">
          <Heading type={"h3"} text={"Design"} className="pt--56" />
          <Paragraph
            text={
              "Create beautiful, usable interfaces to help shape the future of how the web looks."
            }
          />
          <Button children={"Get Started"} className="mt--32 mb--24" />
        </div>
      </section>
      <section className="courses__photography border-radius--10 mt--40">
        <img
          src={iconPhotography}
          alt="icon-photography"
          className="courses__photography__iconPhotography ml--28"
        />

        <div className="mt--24 mx--28">
          <Heading type={"h3"} text={"Photography"} className="pt--56" />
          <Paragraph
            text={
              "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
            }
          />
          <Button children={"Get Started"} className="mt--32 mb--24" />
        </div>
      </section>
      <section className="courses__crypto border-radius--10 mt--40">
        <img
          src={iconCrypto}
          alt="icon-crypto"
          className="courses__crypto__iconCrypto ml--28"
        />

        <div className="mt--24 mx--28">
          <Heading type={"h3"} text={"Crypto"} className="pt--56" />
          <Paragraph
            text={
              "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
            }
          />
          <Button children={"Get Started"} className="mt--32 mb--24" />
        </div>
      </section>
      <section className="courses__business border-radius--10 mt--40">
        <img
          src={iconBusiness}
          alt="icon-business"
          className="courses__business__iconBusiness ml--28"
        />

        <div className="mt--24 mx--28">
          <Heading type={"h3"} text={"Business"} className="pt--56" />
          <Paragraph
            text={
              "A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
            }
          />
          <Button children={"Get Started"} className="mt--32 mb--24" />
        </div>
      </section>
    </section>
  );
};

export default Courses;
