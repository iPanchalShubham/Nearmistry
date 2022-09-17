// Modal for address or area search
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import BackDrop from "../Static_components/Backdrop";
import { debouce } from "../Utils/debounce";

export default function SelectAreaModal({ showModal, click }) {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");
  const [areaInfo, setAreaInfo] = useState({
    areaName: "",
    lat: "",
    lng: "",
  });

  const fetchPlacesSuggestions = debouce(async (place) => {
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

  return (
    <>
      {showModal ? (
        <>
          <BackDrop />
          <div className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-auto max-w-3xl h-[300px] ">
              {/*content*/}
              <div className="border-0 overflow-y-auto rounded-sm relative flex flex-col w-full max-w-[390px] max-h-[400px] bg-white text-black outline-none focus:outline-none h-[350px]">
                {/*header*/}
                <div className="flex items-start justify-between p-5 ">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Where do you want to find Workers.
                  </h3>
                </div>
                {/*body*/}
                <div className="flex items-center justify-center sticky z-30">
                  <div className="flex rounded ml-1">
                    <input
                      type="text"
                      className="py-2 w-[300px] outline-blue-200"
                      placeholder="Search your area to find workers"
                      onChange={(e) => {
                        fetchPlacesSuggestions(e.target.value);
                        inputHandler(e.currentTarget.value);
                      }}
                      value={input}
                    />

                    <button
                      className="flex items-center justify-center px-4  text-white bg-[#5370cf] rounded-sm"
                      onClick={areaInfo.lat ? () => click() : null}
                    >
                      <Link
                        href={
                          areaInfo.lat
                            ? {
                                pathname: "/",
                                query: {
                                  area: areaInfo.areaName,
                                  lat: areaInfo.lat,
                                  lng: areaInfo.lng,
                                },
                              }
                            : "/"
                        }
                      >
                        OK
                      </Link>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col ga ml-8 h-[300px] overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-scroll">
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

                {/*footer*/}
                <div className="flex items-center justify-end p-1 border-t border-solid border-blueGray-200 rounded-b mt-auto">
                  <button
                    className="text-[#3f51b5] font-bold uppercase text-sm px-6  mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => click()}
                  >
                    &#8592; Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
