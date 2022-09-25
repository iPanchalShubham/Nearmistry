import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { Debounce } from "./Debounce";
import PropsType from "prop-types";
function PlacesSearchBar({ redirectAddress, toggle }) {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");
  const [areaInfo, setAreaInfo] = useState({
    areaName: "",
    lat: "",
    lng: "",
  });
  const fetchPlacesSuggestions = Debounce(async (place) => {
    try {
      const res = await axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?country=in&limit=7&types=place%2Cpostcode%2Caddress%2Clocality%2Cneighborhood%2Cdistrict&autocomplete=true&fuzzyMatch=true&routing=true&worldview=in&access_token=${process.env.API_TOKEN}`
        )
        .then((res) => res.data.features);
      setSuggestions(res);
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
      <div className="mt-1 sticky W">
        <div className="flex rounded ml-1">
          <input
            type="text"
            className="py-2 w-full border-2 border-blue-100 outline-none"
            placeholder="Search your area to find workers"
            onChange={(e) => {
              fetchPlacesSuggestions(e.target.value);
              inputHandler(e.currentTarget.value);
            }}
            value={input}
          />

          <button
            className="flex items-center justify-center px-4  text-white bg-[#5370cf] rounded-sm"
            onClick={
              areaInfo.lat & toggle ? () => toggle() : (e) => okHandler(e)
            }
          >
            <Link
              href={
                areaInfo.lat && toggle
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
            >
              OK
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col ml-8 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-scroll">
        {suggestions?.map((res, index) => (
          <div
            className="mt-[13px] font-medium cursor-pointer"
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
            <span className="ml-3 text-sm text-gray-500 mt-1.5">
              {res.place_name.split(",").slice(1)}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
//  redirectAddress, toggle
PlacesSearchBar.propsType = {
  redirectAddress:PropsType.string,
  toggle:PropsType.func
};
export default PlacesSearchBar;
