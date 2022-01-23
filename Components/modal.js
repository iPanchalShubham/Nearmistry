import React from "react";
import Image from "next/image";
import { ReactDimmer } from "react-dimmer";
export default function Modal({ click, showModal, selectedFile, img }) {
  return (
    <>
      {showModal ? (
        <>
        <ReactDimmer
          isOpen={showModal}
          exitDimmer={click}
          onClick = {click}
          zIndex={30}
          blur={2}
        />
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none scale-110 transition duration-1000">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">More Information</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto rounded-sm">
                  <Image
                    src={selectedFile || img}
                    width="250"
                    height="400"
                    placeholder="blur"
                    blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-[#3f51b5] font-bold uppercase text-sm px-6 py-3 mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={click}
                  >
                    &#8592; Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
