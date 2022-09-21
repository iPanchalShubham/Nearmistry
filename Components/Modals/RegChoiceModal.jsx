// Registration choice modal
import React from "react";
import Image from "next/image";
import individual from "../../public/individual.png";
import business from "../../public/business.png";
import Link from "next/link";
export default function Modal({ toggle, showModal }) {
  return (
        <>
              {/* Content */}
              <div className="flex justify-center p-5 text-center">
                <div className="cursor-pointer">
                  <Link href={"/nearmistry/registration"} passHref>
                    <Image
                      src={individual}
                      width="64px"
                      height="64px"
                      placeholder="blur"
                      blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
                      alt=""
                      objectFit="contain"
                    />
                  </Link>
                  <p>Professional</p>
                </div>
                <div className="font-medium text-2xl mx-10">or</div>
                <div className="cursor-pointer">
                  <Link href={"/business/registration"} passHref>
                    <Image
                      src={business}
                      width="64px"
                      height="64px"
                      placeholder="blur"
                      blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
                      alt=""
                      objectFit="contain"
                    />
                  </Link>
                  <p>Business</p>
                </div>
              </div>
        </>
  );
}
