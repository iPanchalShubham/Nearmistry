// Modal for address or area search
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import BackDrop from "../Static_components/Backdrop";
import { debouce } from "../Utils/Debounce.jsx";
import PlacesSearchBar from "../Utils/PlacesSearchBar";

export default function SelectAreaModal({ showModal, click }) {
  return (
    <>
        <PlacesSearchBar />
    </>
  );
}
