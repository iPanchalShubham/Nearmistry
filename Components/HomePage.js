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
import new_badge from "../public/new_.png";
import furniture_shops from "../public/furniture_shops.png";
import contractor from "../public/contractor.png";
import tile_shops from "../public/tile_shops.png";
import plumbing_shops from "../public/plumbing_shops.png";
import welding_shops from "../public/welding_shops.png";
import paint_shops from "../public/paint_shops.png";
import Link from "next/link";
import banner from "../public/nearmistry_banner.jpg";
function HomePage() {
  return (
    <div>
      <div className="mx-auto relative w-[93%] lg: pb-[55%] bg-gradient-to-t from-current to-transparent maskBanner z-[-1] mb-[-60px] md:mb-[-200px] lg:mb-[-400px] ">
        <Image
          src={banner}
          layout="fill"
          placeholder="blur"
          alt="How to find on Nearmistry"
          quality="50"
        />
      </div>
      <section className="flex justify-center relative">
        <div className="shadow bg-white rounded-t self-center w-[93%]">
          <div>
            <div className="justify-center flex items-center bg-yellow-200 rounded-lg py-1">
              <p className="lg:font-medium lg:text-xl font-bold">
                Choose category
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 max-w-7xl mx-auto space-x-4 sm:grid-cols-3 items-center">
            <Link href="/Raj Mistry/1" passHref>
              <button className="categoryCards">
                <div className="relative h-9 w-9 lg:h-12 lg:w-12">
                  <Image
                    src={rajMistryImg}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Raj Mistry"}
                  />
                </div>
                <p className="font-medium text-center">Raj Mistry</p>
              </button>
            </Link>
            <Link href="Tile Granite worker/1" passHref>
              <button className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={tileWorkerImg}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Tile Granite worker"}
                  />
                </div>
                <p className="font-medium text-center">Tile Granite worker</p>
              </button>
            </Link>
            <Link href="/Painter/1" passHref>
              <div className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={painterImg}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Painter"}
                  />
                </div>
                <p className="font-medium text-center">Painter</p>
              </div>
            </Link>
            <Link href="/Carpenter/1" passHref>
              <div className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={carpenterImg}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Carpenter"}
                  />
                </div>
                <p className="font-medium text-center">Carpenter</p>
              </div>
            </Link>
            <Link href="/Welder/1" passHref>
              <div className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={welderImg}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Welder"}
                  />
                </div>
                <p className="font-medium text-center">Welder</p>
              </div>
            </Link>
            <Link href="/Electrician/1" passHref>
              <div className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={electricianImg}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Electrician"}
                  />
                </div>
                <p className="font-medium text-center">Electrician</p>
              </div>
            </Link>
            <Link href="/Plumber/1" passHref>
              <div className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={plumberImg}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Plumbers"}
                  />
                </div>
                <p className="font-medium text-center">Plumber</p>
              </div>
            </Link>
            <Link href="/Maid/1" passHref>
              <div className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={maidImg}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Maids"}
                  />
                </div>
                <p className="font-medium text-center">Maid</p>
              </div>
            </Link>
            <Link href="/Labour/1" passHref>
              <button className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={helperImg}
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    alt={"Get Labour"}
                  />
                  {/*Icons made by <a href="https://www.flaticon.com/authors/skyclick" title="Skyclick">Skyclick</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>*/}
                </div>
                <p className="font-medium text-center">Labour</p>
              </button>
            </Link>
          </div>

          <div>
            <div className="mt-7 justify-center flex items-center bg-yellow-200 rounded-t py-1">
              <p className="lg:font-medium lg:text-xl font-bold">
                Find best contruction shops near you
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 max-w-7xl mx-auto space-x-4 sm:grid-cols-3  items-center">
            <Link href="/Raj Mistry/1" passHref>
              <button className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={contractor}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Thekedaar"}
                  />
                </div>
                <p className="font-medium text-center">
                  Contractor (Thekedaar)
                </p>
              </button>
            </Link>
            <Link href="Tile Granite worker/1" passHref>
              <button className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={tile_shops}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Tile Granite shops"}
                  />
                </div>
                <p className="font-medium text-center">Tile granite shops</p>
              </button>
            </Link>
            <Link href="/Painter/1" passHref>
              <div className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={paint_shops}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Painter"}
                  />
                </div>
                <p className="font-medium text-center">Paint shops</p>
              </div>
            </Link>
            <Link href="/Carpenter/1" passHref>
              <div className="categoryCards">
                <div className="relative h-8 w-8 lg:h-14 lg:w-14">
                  <Image
                    src={furniture_shops}
                    layout="fill"
                    placeholder="blur"
                    alt={"Furniture shops"}
                  />
                </div>
                <p className="font-medium text-center">Wood works</p>
              </div>
            </Link>
            <Link href="/Welder/1" passHref>
              <div className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={welding_shops}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Welder"}
                  />
                </div>
                <p className="font-medium text-center">Welding shops</p>
              </div>
            </Link>
            <Link href="/Electrician/1" passHref>
              <div className="categoryCards">
                <div className="relative h-8 w-8 lg:h-12 lg:w-12">
                  <Image
                    src={plumbing_shops}
                    layout="fill"
                    placeholder="blur"
                    alt={"Get Electrician"}
                  />
                </div>
                <p className="font-medium text-center">Plumbing shops</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
