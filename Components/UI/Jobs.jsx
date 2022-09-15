import { PhoneIcon } from "@heroicons/react/solid";

import React from "react";

function Jobs() {
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="flex md:flex-row h-52 max-w-full rounded-lg bg-gray-50 shadow-md">
          <img
            className="h-auto object-cover s-phones:w-32 sm:40 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://i.pinimg.com/originals/08/80/cc/0880cc6d291d1eb5368b309002bc94a6.jpg"
            alt=""
          />
          <div className="mx-6 my-6 n-phones:my-0 flex flex-col justify-start min-w-0">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Plumbing</h5>
            <p className="text-gray-700 text-sm">Address:house no. 453, Karnal</p>
            <p className="truncate">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              animi voluptatibus vero ipsum assumenda, et voluptatem illo modi
              pariatur reprehenderit consectetur nisi inventore officia nihil
              itaque, magni in nulla placeat.
            </p>
            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            <div className="flex space-x-2">
              <button>
                <a
                  style={{ textDecoration: "none" }}
                  // href={`tel:${}`}
                  className="flex justify-center n-phones:mt-0 sm:mt-2 border-[1px] border-[#3f51b5] text-[#3f51b5]
          rounded-[3px] active:scale-90 transition duration-150 items-center s-phones:px-1 sm:px-2 s-phones:text-xs n-phones:text-sm sm:text-base"
                >
                  <PhoneIcon className="h-5" />
                  Call Now
                </a>
              </button>
              <button>
                <a
                  style={{ textDecoration: "none" }}
                  // href={`tel:${}`}
                  className="flex justify-center mt-2  text-[#3f51b5]
          rounded-[3px] active:scale-90 transition duration-150 items-center px-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
