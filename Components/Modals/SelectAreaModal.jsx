// Modal for address or area search
import React from "react";
import PlacesSearchBar from "../Utils/PlacesSearchBar";
import PropsType from "prop-types";
function SelectAreaModal({ toggle }) {
  return (
    <>
      <PlacesSearchBar toggle={toggle} redirectAddress={"/"} />
    </>
  );
}
SelectAreaModal.propsType = {
  toggle: PropsType.func,
};

export default SelectAreaModal;
