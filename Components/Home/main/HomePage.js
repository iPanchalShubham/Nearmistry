import Professionals from "../Professionals";
import JobsList from "../JobsList";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Businesses from "../Businesses";
function HomePage() {
  return (
    <div>
      <section className="flex justify-center relative mb-3 mt-14">
        <div className="shadow-lg bg-white rounded-t-xl self-center md:w-[93%] w-[98%]  pb-10">
          <Professionals />
          {/* Construction material shops categories */}
          <Businesses/>
          <JobsList />
        </div>
      </section>
    </div>
  );
}

{
  /*Icons made by <a href="https://www.flaticon.com/authors/skyclick" title="Skyclick">Skyclick</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>*/
}
export default HomePage;
