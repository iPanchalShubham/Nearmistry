import Image from "next/image";
import React, { useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/solid";
import Modal from "./modal";


function ItemCard({ img, fName, lName, occupation, age, gender, phoneNumber,selectedFile}) {
  const [showModal,setShowModal] = useState();
  return (<div>
    <Modal showModal={showModal} click={()=> setShowModal(!showModal)} selectedFile={selectedFile} img = {img}/>
    <div className="flex shadow-md m-4 rounded-md bg-white min-w-[] max-w-[370px] max-h-[225px]">
      <div className="relative h-60 w-40 m-2">
        <Image
          src={img}
          layout="responsive"
          width={160}
          height={210}
          className="rounded-md"
          placeholder="blur"
          blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
          onClick={() => setShowModal(!showModal)}
        />
      </div>
      <div className="block mx-auto">
        <div className="flex flex-col mt-6 text-center items-center md:mt-6 lg:mt-8">
          <div>
            <h1 className="text-[23px] lg:text-2xl">
              {fName[0]?.toUpperCase() + fName?.slice(1)}{" "}
              {lName ? lName[0]?.toUpperCase() + lName?.slice(1) : ""}
            </h1>
            <div className="mt-2">
              <h1 className="text-gray-500">Occupation: {occupation.length > 9?occupation.slice(0,9)+"...":occupation}</h1>
              <h2 className="text-gray-500">Age: {age}</h2>
              <h2 className="text-gray-500"> Gender: {gender} </h2>
            </div>

            <button className="block mx-auto text-[#20264b] active:bg-gray-200 active:px-2 active:scale-110 transition duration-100">
              <DotsHorizontalIcon className="h-6" />
            </button>
          </div>
          <div>
            <a
              style={{ textDecoration: "none" }}
              href={`tel:${phoneNumber}`}
              className="flex mt-2 border-[1px] border-[#3f51b5] text-[#3f51b5]
          rounded-[3px] active:scale-90 transition duration-150 items-center justify-center px-2"
            >
              <PhoneIcon className="h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ItemCard;
