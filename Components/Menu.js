// Menu component
import Link from "next/link";
import { useRouter } from "next/router";
const Menu = ({ MenuHandler, showSidebar, regButtonClick }) => {
  const router = useRouter();
  return (
    <>
      {showSidebar ? (
        <div
          className="h-full w-full fixed top-0 right-0 z-40 bg-black opacity-50"
          onClick={MenuHandler}
        ></div>
      ) : null}
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
            <div onClick={() => {regButtonClick(); MenuHandler()}} className = "cursor-pointer">Registration</div>
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

export default Menu;
