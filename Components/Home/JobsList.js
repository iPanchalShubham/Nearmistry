import React from "react";
import Jobs from "../UI/Jobs";
import { useRouter } from "next/router";
export default function JobsList() {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="mt-28 justify-center flex items-center bg-yellow-200 rounded-t-xl shadow py-1">
          <p className="lg:font-medium lg:text-xl font-bold">
            Find work in {router.query.area || <>your area</>}
          </p>
        </div>
      </div>
      <section className="mx-5">
        <Jobs />
        <Jobs />
        <Jobs />
        <Jobs />
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="text-white bg-blue-600 font-medium rounded-lg  px-5 py-2 text-center flex justify-center items-center focus:ring-4 border-blue-900 uppercase"
          >
            Post Work
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

