import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useDebounce } from "./CustomHooks/Debounce";
import PropsType from "prop-types";
function PlacesSearchBar({ redirectAddress, toggle }) {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");
  const [areaInfo, setAreaInfo] = useState({
    areaName: "",
    lat: "",
    lng: "",
  });
  const fetchPlacesSuggestions = useDebounce(async (place) => {
    try {
      const res = await axios.get(`/api/places?place=${place}`);
      setSuggestions(res.data);
    } catch (e) {
      console.log(e.message);
    }
  });

  const inputHandler = (e) => {
    setInput(e);
  };
  const okHandler = (e) => {
    e.preventDefault();
    setSuggestions([]);
  };
  return (
    <>
      <div className="">
        <div className="xl:w-96">
          <div className="input-group relative flex  items-stretch w-full">
            <input
              type="search"
              spellCheck={false}
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal  border border-solid border-gray-300 rounded text-gray-600 focus:border-blue-600 focus:outline-none flex-grow outline-none pl-5 placeholder-gray-400"
              placeholder="Enter your location"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={(e) => {
                fetchPlacesSuggestions(e.target.value);
                inputHandler(e.currentTarget.value);
              }}
              value={input}
            />
            <button
              className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
              onClick={
                areaInfo.lat && toggle
                  ? (e) => {
                      toggle();
                      okHandler(e);
                    }
                  : (e) => okHandler(e)
              }
            >
              <Link
                href={
                  areaInfo.lat
                    ? {
                        pathname: redirectAddress,
                        query: {
                          area: areaInfo.areaName,
                          lat: areaInfo.lat,
                          lng: areaInfo.lng,
                        },
                      }
                    : ""
                }
                passHref
              >
                <p className="uppercase font-bold">Ok</p>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col  rounded-sm absolute z-100 bg-gray-50 text-black">
        {suggestions?.map((res, index) => (
          <div
            className="ml-2 my-3 font-medium cursor-pointer"
            onClick={(e) => {
              console.log(res.geometry.coordinates);
              inputHandler(e.currentTarget.innerText);
              setAreaInfo({
                ...areaInfo,
                areaName: res.text,
                lat: res.geometry.coordinates[0],
                lng: res.geometry.coordinates[1],
              });
            }}
            key={index}
          >
            {res.text}
            <span className="ml-3 text-sm text-gray-500 ">
              {res.place_name.split(",").slice(1)}
            </span>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
//  redirectAddress, toggle
PlacesSearchBar.propsType = {
  redirectAddress: PropsType.string,
  toggle: PropsType.func,
};
export default PlacesSearchBar;
