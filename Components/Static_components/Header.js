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
      <div className="pr-1 sticky top-0 z-50 grid grid-flow-col justify-between pl-3 lg:pr-4 py-2 bg-blue-500 text-white shadow-md items-center">
        <MenuIcon
          className="h-7 w-7 cursor-pointer"
          onClick={() => MenuHandler()}
        />

        <div
          className="text-2xl lg:text-3xl font-[400] cursor-pointer"
          onClick={() => router.push("/")}
        >
          Nearmistry
        </div>
        <button
          className="text-[10px]  lg:text-[15px] uppercase font-semibold cursor-pointer border-2 px-1 bg-gray-50 rounded-md flex items-center text-blue-600 py-0.5 text-ellipsis whitespace-nowrap"
          onClick={() => placeSelectionModalHandler()}
        >
          <div className="h-4 w-4 lg:h-6 lg:w-5 text-red-500">
            <LocationMarkerIcon />
          </div>
         { area.current}
        </button>
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
