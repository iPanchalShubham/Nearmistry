// Registration choice modal
import React from "react";
import Image from "next/image";
import individual from "../../public/individual.png";
import business from "../../public/business.png";
import Link from "next/link";
import BackDrop from "../Static_components/Backdrop";
export default function Modal({ toggle, showModal }) {
  return (
    <>
      {showModal && (
        <>
          <section className="z-50 fixed translate-y-[100%]">
            <main className="bg-gray-50 max-w-md rounded">
              {/* Heading */}
              <header className="flex justify-center bg-[#58a0f9] text-white text-lg rounded-t px-2 py-1 uppercase">
                <p>Choose registration type</p>
              </header>

              {/* Content */}
              <div className="flex justify-center p-5 text-center">
                <div className="cursor-pointer">
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
                  <p>Professional</p>
                </div>
                <div className="font-medium text-2xl mx-10">or</div>
                <div className="cursor-pointer">
                  <Link href={"/business/registration"} passHref>
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

              {/* Footer */}
              <footer className="flex flex-row-reverse p-2 mr-5">
                <button onClick={toggle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>
                </button>
              </footer>
            </main>
          </section>
          <BackDrop toggle = {toggle}/>
        </>
      )}
    </>
    // <>
    //   {showModal ? (
    //     <>
    //       <div className="justify-center items-center flex fixed inset-0 z-50 ">
    //         <div className="my-6 mx-auto max-w-4xl">
    //           {/*content*/}
    //           <div className="border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
    //             {/*header*/}
    //             <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
    //               <h3 className="text-2xl mx-auto text-gray-800 font-semibold">
    //                 Register your
    //               </h3>
    //             </div>
    //             {/*body*/}
    //             <div className="relative p-6 flex flex-row text-black text-center">
    //               <div>
    //                 <Link href={"/nearmistry/registration"} passHref>
    //                   <Image
    //                     src={individual}
    //                     width="64px"
    //                     height="64px"
    //                     placeholder="blur"
    //                     blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
    //                     alt=""
    //                     objectFit="contain"
    //                   />
    //                 </Link>
    //                 <p>Mistry</p>
    //               </div>
    //               <div className="font-medium text-2xl mx-10">or</div>
    //               <div>
    //                 <Link href={"/business/registration"} passHref={true}>
    //                   <Image
    //                     src={business}
    //                     width="64px"
    //                     height="64px"
    //                     placeholder="blur"
    //                     blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
    //                     alt=""
    //                     objectFit="contain"
    //                   />
    //                 </Link>
    //                 <p>Business</p>
    //               </div>
    //             </div>
    //             {/*footer*/}
    //             <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
    //               <button
    //                 className="text-[#3f51b5] font-bold uppercase text-sm px-6 py-3 mr-1 mb-1 ease-linear transition-all duration-150"
    //                 type="button"
    //                 onClick={click}
    //               >
    //                 &#8592; Back
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    // </>
  );
}
