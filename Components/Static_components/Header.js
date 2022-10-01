import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import SelectAreaModal from "../Modals/SelectAreaModal";
import Menu from "./Menu";
import { useRef } from "react";
import RegChoice from "../Modals/RegChoiceModal.jsx";
import Renderer from "../Modals/Renderer/Renderer";

function Header() {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [choiceModal, setChoiceModal] = useState(false);
  const area = useRef("select area");
  area.current = router.query.area || "select area";
  const MenuHandler = () => {
    setShowSidebar(!showSidebar);
  };
  const placeSelectionModalHandler = () => {
    setShowModal(!showModal);
  };
  const choiceModalHandler = () => {
    setChoiceModal(!choiceModal);
  };

  return (
    <>
      <Menu
        regButtonClick={choiceModalHandler}
        MenuHandler={MenuHandler}
        showSidebar={showSidebar}
      />
      <div className="pr-1 sticky top-0 z-50 grid grid-flow-col justify-between pl-3 lg:pr-4 md:py-4 py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600  text-white shadow-md items-center mb-[-10px]">
        <MenuIcon
          className="h-7 w-7 cursor-pointer lg:hidden"
          onClick={() => MenuHandler()}
        />

        <div
          className="text-2xl lg:text-3xl font-medium cursor-pointer italic font ml-5"
          onClick={() => router.push("/")}
        >
          Nearmistry
        </div>
        <div className="flex items-center space-x-3">
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto space-x-2">
            <button className="">Why us?</button>
            <p>|</p>

            <button className="">Become a volunteer</button>
          </div>

          <button
            type="button"
            className="flex items-center font-medium bg-gradient-to-r border-gray-200 border-2 md:px-1 py-1 shadow-md rounded-md text-xs md:text-base"
          >
            <p className="ml-2">Post Work</p>
            <svg
              className="ml-1 w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {/* 
          <button
            className="text-[10px]  lg:text-[15px] uppercase font-semibold cursor-pointer border-2 px-1 bg-gray-50 rounded-md flex text-blue-600 py-0.5 text-ellipsis whitespace-nowrap "
            onClick={() => placeSelectionModalHandler()}
          >
            <div className="h-4 w-4 lg:h-6 lg:w-5 text-red-500">
              <LocationMarkerIcon />
            </div>
            {area.current}
          </button> */}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Renderer
          showModal={choiceModal}
          toggle={choiceModalHandler}
          Heading={() => <>CHOOSE REGISTRATION TYPE</>}
          Content={() => <RegChoice />}
        />
        <Renderer
          showModal={showModal}
          toggle={() => placeSelectionModalHandler()}
          Heading={() => <>Where do you want to find Workers.</>}
          Content={() => (
            <SelectAreaModal toggle={() => placeSelectionModalHandler()} />
          )}
        />
      </div>
    </>
  );
}
/*
— What’s GeoJSON Structure?
It is a JSON document that must have an object inside it , as follows :
<field>: { type: <GeoJSON type> , coordinates: <coordinates> }
*/
export default Header;
