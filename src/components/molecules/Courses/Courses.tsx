import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Svg from "../../atoms/Svg/Svg";
import {
  iconAnimation,
  iconDesign,
  iconPhotography,
  iconCrypto,
  iconBusiness,
} from "../../../assets/svg";
import "./_courses.scss";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";

const Courses = () => {
  return (
    <section className="courses px--16">
      <Heading
        type={"h2"}
        text={"Check out our most popular courses!"}
        className="border-radius--10 px--28 pt--24 pb--32"
      />
      <section className="courses__animation border-radius--10">
        <div className="mt--16 mx--28">
          <Svg icon={iconAnimation} />
        </div>

        <div className="mt--24 mx--28">
          <Heading type={"h3"} text={"Animation"} />
          <Paragraph
            text={
              "Learn the latest animation techniques to create stunning motion design and captivate your audience."
            }
          />
          <Button children={"Get Started"} />
        </div>
      </section>
      <section className="courses__design border-radius--10">
        <div className="mt--16 mx--28">
          <Svg icon={iconDesign} />
        </div>

        <div className="mt--24 mx--28">
          <Heading type={"h3"} text={"Design"} />
          <Paragraph
            text={
              "Create beautiful, usable interfaces to help shape the future of how the web looks."
            }
          />
          <Button children={"Get Started"} />
        </div>
      </section>
      <section className="courses__photography border-radius--10">
        <div className="mt--16 mx--28">
          <Svg icon={iconPhotography} />
        </div>

        <div className="mt--24 mx--28">
          <Heading type={"h3"} text={"Photography"} />
          <Paragraph
            text={
              "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
            }
          />
          <Button children={"Get Started"} />
        </div>
      </section>
      <section className="courses__crypto border-radius--10">
        <div className="mt--16 mx--28">
          <Svg icon={iconCrypto} />
        </div>

        <div className="mt--24 mx--28">
          <Heading type={"h3"} text={"Crypto"} />
          <Paragraph
            text={
              "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
            }
          />
          <Button children={"Get Started"} />
        </div>
      </section>
      <section className="courses__business">
        <div className="mt--16 mx--28">
          <Svg icon={iconBusiness} />
        </div>

        <div className="mt--24 mx--28">
          <Heading type={"h3"} text={"Business"} />
          <Paragraph
            text={
              "A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
            }
          />
          <Button children={"Get Started"} />
        </div>
      </section>
    </section>
  );
};

export default Courses;
