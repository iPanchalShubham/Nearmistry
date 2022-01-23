import { ReactDimmer } from "react-dimmer";
import { useRouter } from "next/router";
const Menu = ({ MenuHandler, showSidebar }) => {
  const router = useRouter();
  return (
    <>
      <div className="bg-black opacity-70 top-0 z-50" ></div>
      <div
        className={`top-0 left-0 bg-gray-100 p-10 pr-15 lg:pr-20 fixed h-full z-40  duration-200 ${
          showSidebar ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div
          className="mt-20 space-y-3  mr-4 font-extralight text-xl"
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
