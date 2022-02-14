import React, {useState } from "react";
import axios from "axios";
export default function SelectAreaModal({ showModal, click,area}) {
  const [suggestions, setSuggestions] = useState([]);
  const [input,setInput] = useState('')
  const fetchRes = async (e) => {
    try {
      const res = await axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${e?.target.value}.json?country=in&limit=8&types=place%2Caddress%2Cdistrict%2Clocality%2Cneighborhood%2Cpoi&autocomplete=true&fuzzyMatch=true&access_token=${process.env.NEXT_PUBLIC_API_TOKEN}`
        )
        .then((res) => res.data.features);
      setSuggestions(res);
    } catch (e) {
      console.log(e.message);
    }
  };
  const inputHandler = (e) =>{
    setInput(e)
  }

  return (
    <>
      {showModal ? (
        <>
          <div
            className="h-full w-[100%] fixed top-0 right-0 z-40 bg-black opacity-50"
            onClick={click}
          />
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
                      onChange={(e) => {fetchRes(e);inputHandler(e.currentTarget.value)}}
                      value = {input}
                    />
                    <button className="flex items-center justify-center px-4  text-white bg-[#5370cf] rounded-sm">
                      OK
                    </button>
                  </div>
                </div>

               
                <div className="flex flex-col ga ml-8 h-[300px] overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-scroll">
                  {suggestions?.map((res,index) => (
                      <div 
                      className="mt-[13px] font-medium cursor-pointer"
                      onClick={(e) => {area(e.currentTarget.textContent);console.log(res.geometry.type,res.geometry.coordinates);inputHandler(e.currentTarget.innerText)}}
                      key = {index}
                      >
                        {res.text}
                      <span className="ml-3 text-sm text-gray-500 mt-1.5">
                        {res.place_name.split(',').slice(1)}
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
