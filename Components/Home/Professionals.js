import React from "react";
import helperImg from "@/public/concrete-finisher.png";
import rajMistryImg from "@/public/rajmistri.png";
import tileWorkerImg from "@/public/tileWorker.png";
import painterImg from "@/public/painter.png";
import carpenterImg from "@/public/carpenter.png";
import welderImg from "@/public/welder.png";
import electricianImg from "@/public/electrician.png";
import plumberImg from "@/public/plumber.png";
import maidImg from "@/public/maid.png";
import CategoryComponent from "../UI/CategoryComponent";
function Professionals() {
  return (
    <>
      <div className="justify-center flex items-center bg-yellow-200 shadow rounded-t-xl py-1">
        <p className="lg:font-medium lg:text-xl font-bold">Choose category</p>
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

        <CategoryComponent categoryImg={painterImg} categoryName={"Painter"} />

        <CategoryComponent
          categoryImg={carpenterImg}
          categoryName={"Carpenter"}
        />

        <CategoryComponent categoryImg={welderImg} categoryName={"Welder"} />

        <CategoryComponent
          categoryImg={electricianImg}
          categoryName={"Electrician"}
        />

        <CategoryComponent categoryImg={plumberImg} categoryName={"Plumber"} />

        <CategoryComponent categoryImg={maidImg} categoryName={"Maid"} />

        <CategoryComponent categoryImg={helperImg} categoryName={"Labour"} />
      </div>
    </>
  );
}

export default Professionals;
