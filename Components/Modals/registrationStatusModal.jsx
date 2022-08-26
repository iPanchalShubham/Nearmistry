// Modal for showing the fail or pass status of registration after submitting the registration form.
import React from "react";
import Router from "next/router";
function registrationStatusModal({ response, openModal }) {
  console.log(response);
  return (
    <>
      {openModal ? (
        <div>
          <div className="h-full w-[100%] fixed top-0 right-0 z-40 bg-black opacity-50" />
          <div className="justify-center items-center flex overflow-hidden fixed inset-0 outline-none focus:outline-none max-h-72 my-auto mx-auto  border max-w-[340px] shadow-lg rounded-md bg-white z-50">
            <div className="mt-3 text-center">
              {response == 201 ? (
                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              ) : (
                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              )}
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {response == 201 ? "Successful" : "Try again!"}
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  {response == 400
                    ? "User already exists!"
                    : response == 201
                    ? "Registration Successfull"
                    : "Check your Internet"}
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className={`px-4 py-2 ${
                    response == 201 ? "bg-green-500" : "bg-red-400"
                  } text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300`}
                  onClick={() => Router.reload()}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default registrationStatusModal;
