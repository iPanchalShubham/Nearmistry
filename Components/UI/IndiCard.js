// Card ui for individuals
import Image from "next/image";
import React, { useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/solid";
import ImageShowcaseModal from "../Modals/ImageShowcaseModal";
import PropsType from "prop-types";
function IndiCard({
  fName,
  lName,
  age,
  phoneNumber,
  fullImgUrl,
  imgUrlArray,
  tags,
}) {
  const [showModal, setShowModal] = useState(false);
  const ImageShowcaseToggler = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <div>
      <ImageShowcaseModal
        showModal={showModal}
        toggle={() => ImageShowcaseToggler()}
        imgUrlArray={fullImgUrl || imgUrlArray}
      />
      <div className="flex shadow-md m-4 rounded-md bg-white max-w-[360px] max-h-[215px]">
        <div className="relative h-[13rem]  min-w-[155px] m-1 lg:m-1">
          <Image
            src={imgUrlArray[0] || null}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[190px] left-[1px] h-3 w-3 p-0"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="lg:mt-6 mt-2 items-center">
          <div>
            <h1 className="text-[1.2rem] lg:text-xl">
              {fName ? fName[0]?.toUpperCase() + fName?.slice(1) : ""}{" "}
              {lName ? lName[0]?.toUpperCase() + lName?.slice(1) : ""}
            </h1>
            <div className="mt-2 h-20 text-ellipsis overflow-y-auto  lg:scrollbar-hide">
              <h2 className="tag">#{age} years</h2>
              {tags?.split(",")?.map((tag, index) => (
                <h2 className="tag" key={index}>
                  #{tag}
                </h2>
              ))}
            </div>

            <button className="block mx-auto text-black active:bg-gray-200 active:px-2 active:scale-110 transition duration-100">
              <DotsHorizontalIcon className="h-6" />
            </button>
          </div>
          <div className="flex">
            <a
              style={{ textDecoration: "none" }}
              href={`tel:${phoneNumber}`}
              className="flex justify-center mt-2 border-[1px] border-[#3f51b5] text-[#3f51b5]
          rounded-[3px] active:scale-90 transition duration-150 items-center px-2"
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

IndiCard.propstype = {
  fName: PropsType.string,
  lName: PropsType.string,
  age: PropsType.string,
  phoneNumber: PropsType.string,
  fullImgUrl: PropsType.array,
  imgUrlArray: PropsType.array,
  tags: PropsType.array,
};
export default IndiCard;
