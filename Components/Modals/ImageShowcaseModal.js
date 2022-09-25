import React from "react";
import ItemsImages from "../Static_components/ItemsImages";
import BackDrop from "../Static_components/Backdrop";
import PropTypes from "prop-types";
function ImageShowcaseModal({ toggle, showModal, imgUrlArray }) {
  return (
    <>
      {showModal ? (
        <>
          <BackDrop toggle={() => toggle()} />
          <div className="flex justify-center items-center  fixed inset-0 z-50 ">
            <div className="lg:w-[500px] w-full">
              {/*content*/}
              <div className="border-0 rounded-sm  flex flex-col bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div onClick={() => toggle()} className="flex justify-between">
                  <div className="text-lg font-medium ml-2">Images</div>
                  <div className="mr-2 text-xl cursor-pointer ">x</div>
                </div>
                {/* <div className="h-full flex items-start justify-between ml-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">More Information</h3>
                </div> */}

                {/*body (Images)*/}
                <div className="flex space-x-3 overflow-x-scroll  p-3 bg-gray-300">
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

ImageShowcaseModal.propTypes = {
  toggle: PropTypes.func,
  imgUrlArray: PropTypes.array,
  showModal: PropTypes.bool,
};

export default ImageShowcaseModal;
