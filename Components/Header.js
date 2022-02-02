import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Menu from "./Menu";
function Header() {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const MenuHandler =()=>{
    setShowSidebar(!showSidebar)
  }
  return (
    <>
    <Menu MenuHandler={MenuHandler} showSidebar = {showSidebar}/>
      <div className="sticky top-0 z-50 grid grid-flow-col pl-3 py-4 bg-gradient-to-r from-[#5370cf] via-[#5385cf] to-[#5370cf] text-white shadow-md">
        <MenuIcon
          className="h-7 w-7 cursor-pointer"
          onClick={() => MenuHandler()}
        />

        <div
          className="text-2xl lg:text-[28px] font-semibold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Nearmistry
        </div>
      </div>
    </>
  );
}

export default Header;
