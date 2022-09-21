import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryComponent({categoryName, categoryImg}) {
  return (
    <>
      <Link href={`${categoryName}/1`} passHref>
        <button className="categoryCards">
          <div className="relative h-9 w-9 lg:h-12 lg:w-12">
            <Image
              src={categoryImg}
              layout="fill"
              placeholder="blur"
              alt={`Get ${categoryName}`}
            />
          </div>
          <p className="font-medium text-center">{categoryName}</p>
        </button>
      </Link>
    </>
  );
}
