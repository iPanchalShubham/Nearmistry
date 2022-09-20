import React from "react";
import BackDrop from "../../Static_components/Backdrop";
import PropsType from "prop-types";
function Renderer({ Heading, Content, toggle, showModal }) {
  return (
    <>
      {showModal && (
        <>
          <section className="z-50 fixed translate-y-[100%]">
            <main className="bg-gray-50 max-w-md rounded">
              {/* Heading */}
              <header className="flex justify-center bg-[#58a0f9] text-white text-lg rounded-t px-2 py-1 uppercase">
                <p>{Heading()}</p>
              </header>

              {/* Content */}
              {Content()}

              {/* Footer */}
              <footer className="flex flex-row-reverse p-2 mr-5">
                <button onClick={toggle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>
                </button>
              </footer>
            </main>
          </section>
          <BackDrop toggle={toggle} />
        </>
      )}
    </>
  );
}
// Content, toggle, showModal 
Renderer.propsType = {
  Heading: PropsType.string,
  toggle:PropsType.func,
  showModal:PropsType.bool
};
export default Renderer;
