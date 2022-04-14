import React from "react";
import ItemsImages from "../Static_components/ItemsImages";
export default function Modal({ click, showModal,imgUrlArray }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="h-full w-full fixed top-0 right-0 z-40 bg-black opacity-50"
            onClick={click}
          ></div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  mx-auto w-[300px]  lg:w-[400px]">
              {/*content*/}
              <div className="border-0 rounded-sm shadow-lg relative flex flex-col  bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div onClick={click} className="flex flex-row-reverse mr-2 text-xl cursor-pointer">
                  x
                </div>
                <div className="h-[80%] flex items-start justify-between ml-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">More Information</h3>
                </div>
                {/*body*/}
                <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3">
                  {imgUrlArray?.map(( img, index) => (
                  <ItemsImages img={img || selectedFile} key = {index} />
                     ))
                     } 
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-[#3f51b5] font-bold uppercase text-sm  mr-1 mb-1 ease-linear transition-all duration-150"
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
