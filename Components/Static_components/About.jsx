import React from "react";
import Header from "./Header.js";
import Image from "next/image";
import mistrisGroup from "../../public/mistrisGroup.jpg";
import CopyrightFooter from "./CopyrightFooter.js";
function About() {
  return (
    <div>
      <Header />
      <div className="h-[120vh] ">
        <div className="flex justify-center flex-col m-3 items-center">
          <div className="font-medium bg-[#a8cbff] text-3xl l:text-5xl m-4 lg:m-5 underline rounded py-1 px-2 inline-block ">
            About Nearmistry
          </div>
          <div>
            <Image
              src={mistrisGroup}
              objectFit="contain"
              alt="Happy workers.jpg"
            />
          </div>
          <p className="mt-2">
            “No human masterpiece has been created without great labour.”
          </p>
          <p className="text-right">– Andre Gide.</p>
          <div className="text-2xl m-4 bg-[#a9c6f1] lg:my-4 underline rounded py-1 px-2 inline-block ">
            Our Vision
          </div>
          <span className="text-xl mt-3 mb-3 font-medium lg:font-semibold max-w-4xl text-center">
            <span className="text-2xl font-bold">“O</span>
            ur initiative is to endow the recognition to the backbones of our
            country. Our eye of sight is to bring every street-smart skilled
            worker online, so that the process of hiring could be done more
            effeciently. Our goal is to provide Nearmistry as such a futuristic
            online platform where Anyone can easily find and hire skilled
            workers as per their requirements. Nearmistry will remain committed
            to help people both in finding work and getting hired
            <span className="text-2xl font-bold">”</span>
          </span>
          <figcaption>
            —Shubham Panchal, <cite>Founder at NearMistry.</cite>
          </figcaption>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  );
}

export default About;
