// Registration choice modal
import React from "react";
import Image from "next/image";
import individual from "../../public/individual.png";
import business from "../../public/business.png";
import Link from "next/link";
export default function Modal({ click, showModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="h-full w-full fixed top-0 right-0 z-40 bg-black opacity-50"
            onClick={click}
          ></div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl mx-auto text-gray-800 font-semibold">
                    Register your
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-row text-black text-center">
                  <div>
                    <Link href={"/nearmistry/registration"} passHref>
                      <Image
                        src={individual}
                        width="64px"
                        height="64px"
                        placeholder="blur"
                        blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
                        alt=""
                        objectFit="contain"
                      />
                    </Link>
                    <p>Mistry</p>
                  </div>
                  <div className="font-medium text-2xl mx-10">or</div>
                  <div>
                    <Link href={"/business/registration"} passHref={true}>
                      <Image
                        src={business}
                        width="64px"
                        height="64px"
                        placeholder="blur"
                        blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
                        alt=""
                        objectFit="contain"
                      />
                    </Link>
                    <p>Business</p>
                  </div>
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
