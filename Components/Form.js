import React from "react";
import { useState } from "react";
import axios from "axios";
import CopyrightFooter from "./Static_components/CopyrightFooter";
import FormsResponseModal from "./Modals/FormsResponseModal";
export default function Form() {

  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");

  /*FORM DATA */
  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    age: "",
    gender: "",
    phoneNumber: "",
    occupation: "",
    imgUrl: "",
    areaName: "",
    location: {
      type: "Point",
      coordinates: [],
    },
  });
  const [loadingVar, setLoadingVar] = useState("Register");
  // Modal controllers var
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState("");
  //*** FUNCTION FETCHING REPONSE FROM MAPBOX API. ***

  const fetchRes = async (e) => {
    try {
      const res = await axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${e?.target.value}.json?country=in&limit=7&types=place%2Cpostcode%2Caddress%2Clocality%2Cneighborhood%2Cdistrict&autocomplete=true&fuzzyMatch=true&routing=true&worldview=in&access_token=${process.env.API_TOKEN}
          `
        )
        .then((res) => res.data.features);
      setSuggestions(res);
    } catch (e) {
      console.log(e.message);
    }
  };
  // *** FUNCTION HANDLING THE CLICK ON SUGGESTIONS ***
  const inputHandler = (e, res) => {
    setInput(e);
    if (res) {
      setUserInfo((prevState) => ({
        ...prevState,
        areaName: res?.text,
        location: {
          ...prevState.location,
          coordinates: res?.geometry.coordinates,
        },
      }));
    }
  };
  
  const okHandler = (e) => {
    e.preventDefault();
    setSuggestions([]);
  };
  
  const imageHandler = async (e) => {
    const formData = new FormData();
    formData.append("file", e.currentTarget.files[0]);
    formData.append("upload_preset", "Shubh*Hustler");
    setLoadingVar("Processing...");
    const data = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        modalHandler(response.status);
        console.log(response);
      })
      .then((r) => {
        setUserInfo({ ...userInfo, imgUrl: r.secure_url });
        setLoadingVar("Register");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // ONCLICKING REGISTER BUTTON
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(userInfo.imgUrl);

    const userInfoNew = JSON.stringify(userInfo);
    console.log(userInfoNew);
    setLoadingVar("Processing...");
    const data2 = await fetch(
      "https://labrecruit.herokuapp.com/volunteerSection/newUser",
      {
        method: "POST",
        body: userInfoNew,
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    ).then((response) => {
      modalHandler(response.status);
      console.log(response);
    }).catch(e => console.log(e));
    
  };
  const modalHandler = (statusCode) => {
    setOpenModal(!openModal);
    setResponse(statusCode);
  };
  return (
    <form onSubmit={(e) => registerHandler(e)}>
      <FormsResponseModal
        openModal={openModal}
        response={response}
        clickModal={modalHandler}
      />
      <div className="font-sans antialiased bg-grey-lightest  h-[85vh]">
        <div className="w-full bg-grey-lightest">
          <div className="mx-auto py-8">
            <div className="lg:w-1/2 mx-auto bg-white">
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
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, fName: e.target.value })
                      }
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
                      required
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, lName: e.target.value })
                      }
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
                      required
                      placeholder="Phone Number"
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          phoneNumber: e.target.value,
                        })
                      }
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
                      min="18"
                      max="60"
                      required
                      placeholder="Age"
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, age: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mb-4 space-x-6 flex justify-center font-medium">
                  <div className="space-x-2">
                    {" "}
                    <input
                      type="radio"
                      id="Male"
                      name="gender"
                      value="Male"
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, gender: e.target.value })
                      }
                    />
                    <label htmlFor="Male">Male</label>
                  </div>
                  <div className="space-x-2">
                    {" "}
                    <input
                      type="radio"
                      id="Female"
                      name="gender"
                      value="Female"
                      required
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, gender: e.target.value })
                      }
                    />
                    <label htmlFor="Female">Female</label>
                  </div>
                  <div className="space-x-2">
                    <input
                      type="radio"
                      id="Other"
                      name="gender"
                      value="Other"
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, gender: e.target.value })
                      }
                    />
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
                      required
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, occupation: e.target.value })
                      }
                    >
                      <option value="" disabled selected hidden>
                        Choose Occupation
                      </option>
                      <option value="Raj Mistry">Raj mistry</option>
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
                <div className="mb-4">
                  {" "}
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="img"
                  >
                    Select image
                  </label>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    required
                    accept=".jpg, .png, .jpeg"
                    onChange={(e) => imageHandler(e)}
                  />
                </div>
                <label className="block text-sm font-bold mb-2" htmlFor="area">
                  Search and select your area
                </label>
                <div className="flex items-center sticky z-30">
                  <div className="flex rounded ml-1">
                    <input
                      type="text"
                      id="area"
                      className="py-2 w-[210px] outline-blue-200 border-2 rounded"
                      placeholder="Where you provide your service"
                      onChange={(e) => {
                        fetchRes(e);
                        inputHandler(e.currentTarget.value);
                      }}
                      value={input}
                      autoComplete="off"
                      required
                      disabled={loadingVar == "Register" ? false : true}
                    />
                    <button
                      className="flex items-center justify-center px-4  text-white bg-[#6271a5] rounded-sm"
                      onClick={(e) => okHandler(e)}
                    >
                      OK
                    </button>
                  </div>
                </div>

                <div className="flex flex-col ga ml-8 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-scroll">
                  {suggestions?.map((res, index) => (
                    <div
                      className="mt-[13px] font-medium cursor-pointer"
                      onClick={(e) => {
                        inputHandler(e.currentTarget.innerText, res);
                      }}
                      key={index}
                    >
                      {res.text}
                      <span className="ml-3 text-sm text-gray-500 mt-1.5">
                        {res.place_name.split(",").slice(1).toString()}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end mt-8">
                  <button
                    className="
                       bg-[#5370cf]
                     hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-md"
                    type="submit"
                    disabled={loadingVar == "Register" ? false : true}
                  >
                    {loadingVar}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </form>
  );
}
