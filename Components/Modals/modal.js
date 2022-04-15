import React from "react";
import ItemsImages from "../Static_components/ItemsImages";
export default function Modal({ click, showModal, imgUrlArray }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="h-full w-full fixed top-0 right-0 z-40 bg-black opacity-50"
            onClick={click}
          />
          <div className="justify-center h-full  items-center flex overflow-x-hidden overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative mx-auto lg:w-[500px] w-full">
              {/*content*/}
              <div className="border-0 rounded-sm shadow-lg relative flex flex-col bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div
                  onClick={click}
                  className="flex justify-between"
                >
                  <div className="text-lg font-medium ml-2">Images</div>
                  <div className="mr-2 text-xl cursor-pointer items-start">x</div>
                </div>
                {/* <div className="h-full flex items-start justify-between ml-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">More Information</h3>
                </div> */}
                {/*body*/}
                <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 bg-gray-300">
                  {imgUrlArray?.map((img, index) => (
                    <ItemsImages img={img || selectedFile} key={index} />
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
