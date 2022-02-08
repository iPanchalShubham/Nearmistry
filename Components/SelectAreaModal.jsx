import React from "react";
export default function SelectAreaModal({ showModal, click }) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="h-full w-[110%] fixed top-0 right-0 z-40 bg-black opacity-50"
            onClick={click}
          />
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-white text-black outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-solid ">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Where do you want to find Workers.
                  </h3>
                </div>
                {/*body*/}
                <div className="flex items-center justify-center">
                  <div className="flex rounded mx-2">
                    <input
                      type="text"
                      className="px-4 py-2 w-80 outline-blue-200"
                      placeholder="Search your area to find workers"
                    />
                    <button className="flex items-center justify-center px-4  text-white bg-[#5370cf] rounded-sm">
                      OK
                    </button>
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
