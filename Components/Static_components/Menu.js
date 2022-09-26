// SIDEBAR IN HEADER
import Link from "next/link";
import { useRouter } from "next/router";
import BackDrop from "./Backdrop";
import PropsType from "prop-types";
const Menu = ({ MenuHandler, showSidebar, regButtonClick }) => {
  return (
    <>
      {showSidebar ? <BackDrop toggle={MenuHandler} /> : null}
      <div
        className={`top-0 left-0 bg-white p-10 pr-15 lg:pr-20 fixed h-full z-40 ease-in duration-150 ${
          showSidebar ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div className="text-3xl mt-9 font-thin">Nearmistry.com</div>
        <div className="mt-10 space-y-3 font-extralight text-xl">
          <div>
            <Link href={"/404.js"}>Why us?</Link>{" "}
          </div>
          <div>
            <Link href={"/404.js"}>Become a Volunteer</Link>{" "}
          </div>
          <div>
            <div
              onClick={() => {
                regButtonClick();
                MenuHandler();
              }}
              className="cursor-pointer"
            >
              Registration
            </div>
          </div>
          <div>
            <Link href={"/404.js"}>Contact us</Link>{" "}
          </div>
          <div>
            <Link href={"/about"}>About us</Link>{" "}
          </div>
          <div>
            <Link href={"/404.js"}>Help us</Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
// MenuHandler, showSidebar, regButtonClick
Menu.propsType = {
  MenuHandler: PropsType.func,
  regButtonClick: PropsType.func,
  showSidebar: PropsType.bool,
};
export default Menu;
