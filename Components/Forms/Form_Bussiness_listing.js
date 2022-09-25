// Forms to register for businesses
import React from "react";
import { useState } from "react";
import RegistrationStatusModal from "../Modals/registrationStatusModal.jsx";

import Loading from "../Static_components/loading";
import PlacesSearchBar from "../Utils/PlacesSearchBar";
export default function Form() {
  const [businessInfo, setBusinessInfo] = useState({
    bName: "",
    bAge: "",
    phoneNumber: "",
    occupation: "",
    imgUrlArray: [],
    ownerImg: "",
    areaName: "",
    address: "",
    location: {
      type: "Point",
      coordinates: [],
    },
    tags: "",
  });

  const [loadingVar, setLoadingVar] = useState("Register");
  // MODAL VAR CONTROLLERS
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState("");
  // Image uploader method
  const OwnerImageHandler = async (event) => {
    setLoadingVar("Processing...");
    event.preventDefault();
    const files = [...event.currentTarget.files];
    const promises = [];
    files.forEach(async (element, i) => {
      const formData = new FormData();
      // Append Blob.
      formData.append("file", element);
      formData.append(
        "public_id",
        businessInfo.bName + businessInfo.phoneNumber
      );
      formData.append("upload_preset", "Shubh*Hustler");
      promises.push(
        fetch(
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
            regModalHandler(response.status);
            console.log(response);
          })
          .then((r) => {
            setBusinessInfo({
              ...businessInfo,
              ownerImg: r.secure_url,
            });
          })
      );
    });
    Promise.all(promises).then(function () {
      console.log(businessInfo.imgUrlArray);
      setLoadingVar("Register");
    });
  };

  const imageHandler = async (event) => {
    setLoadingVar("Processing...");
    event.preventDefault();
    const files = [...event.currentTarget.files];
    console.log(files);
    const promises = [];
    files.forEach(async (element, i) => {
      const formData = new FormData();
      formData.append("file", element);
      formData.append("public_id", businessInfo.phoneNumber + i);
      console.log(i);
      formData.append("upload_preset", "Shubh*Hustler");
      promises.push(
        fetch(
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
            regModalHandler(response.status);
            console.log(response);
          })
          .then((r) => {
            setBusinessInfo((prevState) => ({
              ...businessInfo,
              imgUrlArray: [...prevState.imgUrlArray, r.secure_url],
            }));
          })
      );
    });
    Promise.all(promises).then(function () {
      console.log(businessInfo.imgUrlArray);
      setLoadingVar("Register");
    });
    console.log(businessInfo.imgUrlArray);
  };

  // ONCLICKING REGISTER BUTTON
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(businessInfo.imgUrlArray);

    const userInfoNew = JSON.stringify(businessInfo);
    console.log(userInfoNew);
    setLoadingVar("Processing...");
    const data2 = await fetch(
      "https://labrecruit.herokuapp.com/volunteerSection/newBusiness",
      {
        method: "POST",
        body: userInfoNew,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
      .then((response) => {
        regModalHandler(response.status);
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  const regModalHandler = (statusCode) => {
    setOpenModal(!openModal);
    setResponse(statusCode);
  };
  return (
    <form onSubmit={(e) => registerHandler(e)}>
      {/* Registration status modal */}
      <RegistrationStatusModal
        openModal={openModal}
        response={response}
        toggle={regModalHandler}
      />
      {/* Loader image */}
      <Loading
        openmodal={
          (loadingVar == "Processing...") & (openModal == false) ? true : false
        }
      />
      <div className={`font-sans antialiased bg-grey-lightest  h-[100vh]`}>
        <div className="w-full bg-grey-lightest">
          <div className="mx-auto py-8">
            <div className="lg:w-1/2 mx-auto bg-white">
              {/* REGISTRATION */}
              <div className="py-4 text-black items-center text-2xl border-grey-lighter flex justify-center font-medium space-x-2">
                Business Registration
              </div>
              <div className="py-4 px-8">
                <div className="flex mb-4">
                  <div className="w-full">
                    {/* BUSINESS NAME */}
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="Business_Name"
                    >
                      Company Name
                    </label>
                    {/* FIELD INPUT */}
                    <input
                      className="appearance-none border rounded w-full py-2 px-3"
                      id="Business_Name"
                      type="text"
                      required
                      placeholder="Bussiness name"
                      onChange={(e) =>
                        setBusinessInfo({
                          ...businessInfo,
                          bName: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                {/*  PHONE NUMBER */}

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
                        setBusinessInfo({
                          ...businessInfo,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-[48%] ml-1">
                    {/*  AGE OF BUSSINESS  */}

                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="established_in"
                    >
                      Age of Company
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="established_in"
                      type="number"
                      required
                      placeholder="Years"
                      onChange={(e) =>
                        setBusinessInfo({
                          ...businessInfo,
                          bAge: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div>
                    {/* TYPE OF BUSSINESS */}

                    <label
                      htmlFor="bType"
                      className="block text-sm font-bold mb-2"
                    >
                      Bussiness type
                    </label>

                    <select
                      name="occupations"
                      id="bType"
                      className="appearance-none border rounded w-full py-2 px-3 "
                      required
                      onChange={(e) =>
                        setBusinessInfo({
                          ...businessInfo,
                          occupation: e.target.value,
                        })
                      }
                    >
                      <option value="" disabled selected hidden>
                        Choose business type
                      </option>
                      <option value="Tile Granite">Tile Granite</option>
                      <option value="Wood works">Wood works</option>
                      <option value="Labour contractor(Thekedaar)">
                        Labour contractor(Thekedaar)
                      </option>
                      <option value="Welding">Welding</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Painter contractor(Thekedaar)">
                        Painter contractor(Thekedaar)
                      </option>
                      <option value="Sanitary">Sanitary</option>
                      <option value="Paints">Paint shop</option>
                      <option value="Tile Granite contractor(Thekedaar)">
                        Tile Granite contractor(Thekedaar)
                      </option>
                      <option value="Building material">
                        Building material
                      </option>
                    </select>
                  </div>
                </div>
                <div className="w-full mb-2">
                  {/*  BUSINESS ADDRESS  */}

                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="established_in"
                  >
                    Business address
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="Adress"
                    type="text"
                    required
                    placeholder="Example: Shop no. 32,Main durga road,karnal"
                    onChange={(e) =>
                      setBusinessInfo({
                        ...businessInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Tags */}
                <div>
                  <div>
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="Tags area"
                    >
                      Write your services, for ex- Steel Door, Main Gate, Wire
                      fitting...
                    </label>
                    <div>
                      <input
                        type="text"
                        id="Tags area"
                        className="py-2 w-full border-2 rounded mb-2"
                        placeholder="Steel Doors, Plumbing, Paints"
                        onChange={(e) => {
                          setBusinessInfo({
                            ...businessInfo,
                            tags: e.target.value,
                          });
                          console.log(businessInfo.tags);
                        }}
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  {" "}
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="img"
                  >
                    Upload images of your Business
                  </label>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    multiple
                    required
                    disabled={businessInfo.phoneNumber !== "" ? false : true}
                    accept=".jpg, .png, .jpeg"
                    onChange={(e) => imageHandler(e)}
                  />
                </div>
                <hr />

                <div className="mb-4">
                  {" "}
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="img"
                  >
                    Upload Owner&apos;s Image
                  </label>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    disabled={businessInfo.phoneNumber !== "" ? false : true}
                    accept=".jpg, .png, .jpeg"
                    onChange={(e) => OwnerImageHandler(e)}
                  />
                </div>
                <hr />
                {/* AREA SEARCH FIELD*/}
                <label className="block text-sm font-bold mb-2" htmlFor="area">
                  Search and select your area
                </label>
                <PlacesSearchBar />
                {/* REGISTER */}
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
    </form>
  );
}
