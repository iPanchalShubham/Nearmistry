import React from "react";
import PropsType from "prop-types";
function BackDrop({ toggle }) {
  return (
    <div>
      <div
        onClick={toggle}
        className="h-full w-full fixed top-0 right-0 z-30 bg-black opacity-50"
      />
    </div>
  );
}
BackDrop.propsType = {
  toggle: PropsType.func,
};
export default BackDrop;
