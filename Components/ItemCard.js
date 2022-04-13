import Image from "next/image";
import React, { useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/solid";
import Modal from "./Modals/modal";

function ItemCard({
  fName,
  lName,
  occupation,
  age,
  gender,
  phoneNumber,
  fullImgUrl,
  imgUrl,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Modal
        showModal={showModal}
        click={() => setShowModal(!showModal)}
        selectedFile={fullImgUrl}
        img={imgUrl}
      />
      <div className="flex shadow-md m-4 rounded-md bg-white max-w-[370px] max-h-[225px]">
        <div className="relative h-60 w-40 m-2">
          <Image
            src={imgUrl || null}
            layout="responsive"
            objectFit="cover"
            width={160}
            height={210}
            className="rounded-md"
            placeholder="blur"
            blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
            onClick={() => setShowModal(!showModal)}
            alt={fName || lName}
          />
        </div>
          <div className="mt-6 items-center md:mt-6">
            <div className="">
              <h1 className="text-[1.2rem] lg:text-2xl">
                {fName ? fName[0]?.toUpperCase() + fName?.slice(1) : ""}{" "}
                {lName
                    ? lName[0]?.toUpperCase() + lName?.slice(1)
                  : ""}
              </h1>
              <div className="mt-2">
                <h2 className="tag">
                  #{age} years
                </h2>
                <h2 className="tag">
                #{gender}
                </h2>
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
          rounded-[3px] active:scale-90 transition duration-150 items-center justify-center "
              >
                <PhoneIcon className="h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ItemCard;