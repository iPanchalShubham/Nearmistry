import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import SelectAreaModal from "./SelectAreaModal";
import Menu from "./Menu";
function Header() {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal,setShowModal] = useState(true);
  const MenuHandler =()=>{
    setShowSidebar(!showSidebar)
  }
  const clickHandler = ()=>{
    setShowModal(!showModal)
  }
  console.log(showModal)
  return (
    <>
    <Menu MenuHandler={MenuHandler} showSidebar = {showSidebar}/>
      <div className="pr-1 sticky top-0 z-50 grid grid-flow-col justify-between pl-3 lg:pr-4 py-4 bg-gradient-to-r from-[#5370cf] via-[#5385cf] to-[#5370cf] text-white shadow-md items-center">
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
          className="text-[10px]  lg:text-[15px] uppercase font-semibold cursor-pointer border-2 px-1 bg-gray-50 rounded-md flex items-center text-[#5370cf] py-1"
          onClick={() => clickHandler()}
        >
          <div className="h-4 w-4 lg:h-6 lg:w-5 text-red-500">
          <LocationMarkerIcon/>
          </div>
          select area
        </button>
        <SelectAreaModal showModal={showModal} click={()=>clickHandler()}/>

      </div>
    </>
  );
}

export default Header;
