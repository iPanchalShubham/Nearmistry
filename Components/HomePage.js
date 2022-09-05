import React from "react";
import Image from "next/image";
import helperImg from "../public/concrete-finisher.png";
import rajMistryImg from "../public/rajmistri.png";
import tileWorkerImg from "../public/tileWorker.png";
import painterImg from "../public/painter.png";
import carpenterImg from "../public/carpenter.png";
import welderImg from "../public/welder.png";
import electricianImg from "../public/electrician.png";
import plumberImg from "../public/plumber.png";
import maidImg from "../public/maid.png";
import furniture_shops from "../public/furniture_shops.png";
import contractor from "../public/contractor.png";
import tile_shops from "../public/tile_shops.png";
import plumbing_shops from "../public/sanitary_shop.png";
import welding_shops from "../public/welding_shops.png";
import paint_shops from "../public/paint_shops.png";
import Next_arrow from "../public/Next_arrow.png";
import building_materials_shop from "../public/building-materials_shop.png";
import banner from "../public/nearmistry_banner.jpg";
import ElectricalShop from "../public/Electric_shop.png";
import CategoryComponent from "./UI/CategoryComponent";
function HomePage() {
  return (
    <div>
      <div className="mx-auto relative w-[100%] lg: pb-[55%] maskBanner z-[-1] mb-[-80px] md:mb-[-200px] lg:mb-[-300px] xl:mb-[-420px] ">
        <Image
          src={banner}
          layout="fill"
          placeholder="blur"
          alt="How to find on Nearmistry"
        />
      </div>
      <section className="flex justify-center relative mb-3 ">
        <div className="shadow-lg bg-white rounded-t-xl self-center w-[93%] pb-10">
          <div>
            <div className="justify-center flex items-center bg-yellow-200 shadow rounded-t-xl py-1">
              <p className="lg:font-medium lg:text-xl font-bold">
                Choose category
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 max-w-7xl mx-auto space-x-4 sm:grid-cols-3 items-center">
            <CategoryComponent
              categoryImg={rajMistryImg}
              categoryName={"Raj Mistry"}
            />

            <CategoryComponent
              categoryImg={tileWorkerImg}
              categoryName={"Tile Granite worker"}
            />

            <CategoryComponent
              categoryImg={painterImg}
              categoryName={"Painter"}
            />

            <CategoryComponent
              categoryImg={carpenterImg}
              categoryName={"Carpenter"}
            />

            <CategoryComponent
              categoryImg={welderImg}
              categoryName={"Welder"}
            />

            <CategoryComponent
              categoryImg={electricianImg}
              categoryName={"Electrician"}
            />

            <CategoryComponent
              categoryImg={plumberImg}
              categoryName={"Plumber"}
            />

            <CategoryComponent categoryImg={maidImg} categoryName={"Maid"} />

            <CategoryComponent
              categoryImg={helperImg}
              categoryName={"Labour"}
            />
          </div>

          {/* Construction material shops */}
          <div>
            <div className="mt-7 justify-center flex items-center bg-yellow-200 rounded-t-xl shadow py-1">
              <p className="lg:font-medium lg:text-xl font-bold">
                Find best contruction shops near you
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 max-w-7xl mx-auto space-x-4 sm:grid-cols-3  items-center">
            <CategoryComponent
              categoryImg={building_materials_shop}
              categoryName={"Building material"}
            />

            <CategoryComponent
              categoryImg={contractor}
              categoryName={"Contractors"}
            />

            <CategoryComponent
              categoryImg={tile_shops}
              categoryName={"Tile Granite"}
            />

            <CategoryComponent
              categoryImg={paint_shops}
              categoryName={"Paints"}
            />

            <CategoryComponent
              categoryImg={furniture_shops}
              categoryName={"Wood works"}
            />

            <CategoryComponent
              categoryImg={welding_shops}
              categoryName={"Welding"}
            />

            <CategoryComponent
              categoryImg={plumbing_shops}
              categoryName={"Sanitary"}
            />

            <CategoryComponent
              categoryImg={ElectricalShop}
              categoryName={"ElectricalShop"}
            />

            <CategoryComponent
              categoryImg={Next_arrow}
              categoryName={"more..."}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /*Icons made by <a href="https://www.flaticon.com/authors/skyclick" title="Skyclick">Skyclick</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>*/
}
export default HomePage;
