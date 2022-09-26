// Modal for address or area search
import React from "react";
import PlacesSearchBar from "../Utils/PlacesSearchBar";
import PropsType from "prop-types";
function SelectAreaModal({ toggle,showModal }) {
  return (
    <>
      <PlacesSearchBar toggle={toggle} redirectAddress={"/"} showModal = {showModal}/>
    </>
  );
}
SelectAreaModal.propsType = {
  toggle: PropsType.func,
};

export default SelectAreaModal;
