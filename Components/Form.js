import React from "react";
import { useState } from "react";
import axios from "axios";
import CopyrightFooter from "./CopyrightFooter";
export default function Form() {
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
    <div>
      <div className="font-sans antialiased bg-grey-lightest">
        <div className="w-full bg-grey-lightest">
          <div className="container mx-auto py-8">
            <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
              <div className="py-4 px-8 text-black text-2xl border-grey-lighter flex justify-center font-medium">
                Registration
              </div>
              <div className="py-4 px-8">
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3"
                      id="first_name"
                      type="text"
                      placeholder="first name"
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3"
                      id="last_name"
                      type="text"
                      placeholder="last name"
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-[75%] mr-1">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="phone_number"
                    >
                      Phone Number
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3"
                      id="phone_number"
                      type="tel"
                      maxLength={10}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="w-[25%] ml-1">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="age"
                    >
                      Age
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="age"
                      type="number"
                      min={18}
                      max={60}
                      placeholder="Age"
                    />
                  </div>
                </div>
                <div className="mb-4 space-x-6 flex justify-center font-medium">
                  <div className="space-x-2">
                    {" "}
                    <input type="radio" id="Male" name="gender" value="Male" />
                    <label htmlFor="Male">Male</label>
                  </div>
                  <div className="space-x-2">
                    {" "}
                    <input
                      type="radio"
                      id="Female"
                      name="gender"
                      value="Female"
                    />
                    <label htmlFor="Female">Female</label>
                  </div>
                  <div className="space-x-2">
                    <input type="radio" id="Other" name="gender" value="Other" />
                    <label htmlFor="Other">Other</label>
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    <label
                      htmlFor="occupation"
                      className="block text-sm font-bold mb-2"
                    >
                      Occupation
                    </label>

                    <select
                      name="occupations"
                      id="occupation"
                      className="appearance-none border rounded w-full py-2 px-3 "
                    >
                      <option value="Rajmistry">Rajmistry</option>
                      <option value="Labour">Labour</option>
                      <option value="Tile Granite worker">
                        Tile Granite worker
                      </option>
                      <option value="Carpenter">Carpenter</option>
                      <option value="Welder">Welder</option>
                      <option value="Electrician">Electrician</option>
                      <option value="Plumber">Plumber</option>
                      <option value="Maid">Maid</option>
                      <option value="Painter">Painter</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4" >
                  {" "}
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="img"
                  >
                    Select image
                  </label>
                  <input type="file" id="img" name="img" accept="image/*" />
                </div>
                <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="area"
                  >
                    Search and select your area
                  </label>
                <div className="flex items-center sticky z-30">
                  <div className="flex rounded ml-1">
                    <input
                      type="text"
                      id="area"
                      className="py-2 w-[270px] outline-blue-200 border-2 rounded"
                      placeholder="Where you provide your service"
                      onChange={(e) => {fetchRes(e);inputHandler(e.currentTarget.value)}}
                      value = {input}
                    />
                  </div>
                </div>

               
                <div className="flex flex-col ga ml-8 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-scroll">
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
                <div className="flex items-center justify-end mt-8">
                  <button
                    className="bg-[#5370cf] hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-md"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CopyrightFooter/>
      </div>
    </div>
  );
}
