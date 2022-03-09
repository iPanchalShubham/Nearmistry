import React from "react";
import Header from "../Header";
import Image from "next/image";
import mistrisGroup from "../../public/mistrisGroup.jpg";
import CopyrightFooter from "../CopyrightFooter";
function About() {
  return (
    <div >
      <Header />
      <div className="h-[100vh] ">
        <div className="flex justify-center flex-col m-3 items-center">
          <div className="font-medium bg-[#a8cbff] text-3xl l:text-5xl m-4 lg:m-5 underline rounded py-1 px-2 inline-block ">
            About Nearmistry
          </div>
          <Image src={mistrisGroup} objectFit="contain" />
          <p className="mt-2">
            <blockquote>
              “No human masterpiece has been created without great labour.”
            </blockquote>
          </p>
          <div className="text-right">– Andre Gide.</div>
          <div className="text-2xl m-4 bg-[#a9c6f1] lg:my-4 underline rounded py-1 px-2 inline-block ">
            Our Vision
          </div>
          <span className="text-xl mt-3 mb-3 font-medium lg:font-semibold max-w-4xl text-center">
            <span className="text-2xl font-bold">O</span>
            ur vision is to bring every street-smart skilled person online, so
            that hiring could be done efficiently. Our goal is to develop
            Nearmistry to a futuristic platform where anyone can hire skilled
            people. So that, skilled people can make their living easily.
          </span>
          <figcaption>—Shubham Panchal, <cite>Founder at NearMistry.</cite></figcaption>
        </div>
      </div>
      <CopyrightFooter />
    </div>
  );
}

export default About;
