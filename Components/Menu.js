import { useRouter } from "next/router";
const Menu = ({ MenuHandler, showSidebar }) => {
  const router = useRouter();
  return (
    <>
     {showSidebar?<div className="h-full w-full fixed top-0 right-0 z-40 bg-black opacity-50" onClick={MenuHandler} ></div>:null}
      <div
        className={`top-0 left-0 bg-white p-10 pr-15 lg:pr-20 fixed h-full z-40 duration-100 ${
          showSidebar ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <h2 className="text-3xl mt-9 font-thin" >Nearmistry.com</h2>
        <hr className=""/>
        <div
          className="mt-10 space-y-3 font-extralight text-xl"
          onClick={() => router.push(`/404.js`)}
        >
          <h4 className="cursor-pointer">Why us?</h4>
          <h4 className="cursor-pointer">Become a Volunteer</h4>
          <h4 className="cursor-pointer">How it works?</h4>
          <h4 className="cursor-pointer">Contact us</h4>
          <h4 className="cursor-pointer">About us</h4>
          <h4 className="cursor-pointer">Help us</h4>
        </div>
      </div>
    </>
  );
};

export default Menu;
