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
import Link from "next/link";
function HomePage() {
  return (
    <div>
      <section>
        <div className="grid grid-cols-3 max-w-7xl mx-auto space-x-4 sm:grid-cols-3  items-center">
          <Link href="/Raj Mistry/1" passHref>
            <button className="categoryCards">
              <div className="relative h-10 w-10 lg:h-12 lg:w-12">
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
              <div className="relative h-10 w-10 lg:h-12 lg:w-12">
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
              <div className="relative h-10 w-10 lg:h-12 lg:w-12">
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
              <div className="relative h-10 w-10 lg:h-12 lg:w-12">
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
              <div className="relative h-10 w-10 lg:h-12 lg:w-12">
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
              <div className="relative h-10 w-10 lg:h-12 lg:w-12">
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
              <div className="relative h-10 w-10 lg:h-12 lg:w-12">
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
              <div className="relative h-10 w-10 lg:h-12 lg:w-12">
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
              <div className="relative h-10 w-10 lg:h-12 lg:w-12">
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
      </section>
    </div>
  );
}

export default HomePage;
