import React from "react";
import furniture_shops from "../../public/furniture_shops.png";
import contractor from "../../public/contractor.png";
import tile_shops from "../../public/tile_shops.png";
import plumbing_shops from "../../public/sanitary_shop.png";
import welding_shops from "../../public/welding_shops.png";
import paint_shops from "../../public/paint_shops.png";
import Next_arrow from "../../public/Next_arrow.png";
import building_materials_shop from "../../public/building-materials_shop.png";
import ElectricalShop from "../../public/Electric_shop.png";
import CategoryComponent from "../UI/CategoryComponent";
function Businesses() {
  return (
    <>
      <div className="mt-20 justify-center flex items-center bg-yellow-200 rounded-t-xl shadow py-1">
        <p className="lg:font-medium lg:text-xl font-bold">
          Find best contruction shops near you
        </p>
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

        <CategoryComponent categoryImg={paint_shops} categoryName={"Paints"} />

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

        <CategoryComponent categoryImg={Next_arrow} categoryName={"more..."} />
      </div>
    </>
  );
}

export default Businesses;
