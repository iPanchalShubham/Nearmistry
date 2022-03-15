import React from "react";
import Header from "./Header";
import Image from "next/image";
import mistrisGroup from "../../public/mistrisGroup.jpg";
import CopyrightFooter from "./CopyrightFooter.js";
function About() {
  return (
    <section>
      <Header />
      <main className="h-[100vh] ">
        <article className="flex justify-center flex-col m-3 items-center">
          <header className="font-medium bg-[#a8cbff] text-3xl l:text-5xl m-4 lg:m-5 underline rounded py-1 px-2 inline-block ">
            About Nearmistry
          </header>
          <figure>
            <Image src={mistrisGroup} objectFit="contain" />
          </figure>
          <p className="mt-2">
            <blockquote>
              “No human masterpiece has been created without great labour.”
            </blockquote>
          </p>
          <p className="text-right">– Andre Gide.</p>
          <header className="text-2xl m-4 bg-[#a9c6f1] lg:my-4 underline rounded py-1 px-2 inline-block ">
            Our Vision
          </header>
          <span className="text-xl mt-3 mb-3 font-medium lg:font-semibold max-w-4xl text-center">
            <span className="text-2xl font-bold">O</span>
            ur vision is to bring every street-smart skilled person online, so
            that hiring could be done efficiently. Our goal is to develop
            Nearmistry to a futuristic platform where anyone can hire skilled
            people. So that, skilled people can make their living easily.
          </span>
          <figcaption>
            —Shubham Panchal, <cite>Founder at NearMistry.</cite>
          </figcaption>
        </article>
      </main>
      <CopyrightFooter />
    </section>
  );
}

export default About;
