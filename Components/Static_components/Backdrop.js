import React from "react";

function BackDrop({toggle}) {
  return (
    <div >
      <div onClick={toggle} className="h-full w-full fixed top-0 right-0 z-30 bg-black opacity-50"/>
    </div>
  );
}

export default BackDrop;
