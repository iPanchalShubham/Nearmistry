// Form for individual's registration
import React from "react";
import { useState } from "react";
import RegistrationStatusModal from "../Modals/RegistrationStatusModal";
import Loading from "../Static_components/loading";
import PlacesSearchBar from "../Utils/PlacesSearchBar";
export default function Form() {
  /*FORM DATA */
  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    age: "",
    gender: "",
    phoneNumber: "",
    occupation: "",
    imgUrlArray: "",
    areaName: "",
    location: {
      type: "Point",
      coordinates: [],
    },
    tags: "",
  });

  const [loadingVar, setLoadingVar] = useState("Register");
  // Modal controllers var
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState("");

  // Image uploader method
  const imageHandler = async (event) => {
    setLoadingVar("Processing...");
    event.preventDefault();
    const files = [...event.currentTarget.files];
    const promises = [];
    files.forEach(async (element, i) => {
      const formData = new FormData();
      formData.append("file", element);
      formData.append("public_id", userInfo.phoneNumber + i);
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
          })
          .then((r) => {
            setUserInfo((prevState) => ({
              ...userInfo,
              imgUrlArray: [...prevState.imgUrlArray, r.secure_url],
            }));
          })
      );
    });
    Promise.all(promises).then(function () {
      console.log(userInfo.imgUrlArray);
      setLoadingVar("Register");
    });
  };

  // ONCLICKING REGISTER BUTTON
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(userInfo.imgUrlArray);

    const userInfoNew = JSON.stringify(userInfo);
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
    )
      .then((response) => {
        modalHandler(response.status);
        console.log(response);
      })
      .catch((e) => console.log(e));
  };
  //Registration  Modal handler
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
        clickModal={regModalHandler}
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
              <div className="py-4 text-black items-center text-2xl border-grey-lighter flex justify-center font-medium space-x-2">
                Registration
              </div>

              <div className="py-4 px-8">
                <div className="flex mb-4">
                  {/* First name */}
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
                  {/* Last name */}
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
                  {/* PHONE NUMBER  */}
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
                  {/* Age */}
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

                {/* Genders */}
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
                {/* Occupations */}
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
                    <textarea
                      className=" w-[100%] border-2 rounded"
                      placeholder="Steel Doors, Plumbing, Paints, Plumbing, Sanitary..."
                      type="text"
                      id="Tags area"
                      onChange={(e) => {
                        setUserInfo({
                          ...userInfo,
                          tags: e.target.value,
                        });
                        console.log(userInfo.tags);
                      }}
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                {/* Upload image */}
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
                    multiple
                    accept=".jpg, .png, .jpeg"
                    onChange={(e) => imageHandler(e)}
                  />
                </div>
                {/* Search your address */}
                <label className="block text-sm font-bold mb-2" htmlFor="area">
                  Search and select your area
                </label>
                <PlacesSearchBar />
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
