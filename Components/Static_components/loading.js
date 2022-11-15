import React from "react";
import Image from "next/image";
import spinner_gif from "../../public/Spinner-0.5s-185px.gif";
import PropsType from "prop-types";
function loading({ openmodal }) {
  return (
    <div>
      {openmodal ? (
        <>
          <div className="h-full w-[100%] fixed top-0 right-0 z-40 bg-slate-200 opacity-60" />
          <div className="block opacity-50  fixed inset-0  max-h-72 my-auto mx-auto max-w-[340px] z-50">
            <div className="mt-3 text-center">
              <Image
                src={spinner_gif}
                alt="loading..."
                objectFit="contain"
                height="130px"
                width="130px"
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
loading.propsType = {
  openmodal: PropsType.bool,
};
export default loading;
