import Image from "next/image";
import banner from "../../public/Nearmistry_banner2.svg";
import PlacesSearchBar from "../../Components/Utils/PlacesSearchBar";
function Banner() {
  return (
    <>
      <div className="max-w-full relative  pb-[57%] z-[-1]  mb-[-90px] sm:mb-[-170px] md:mb-[-210px] lg:mb-[-300px] xl:mb-[-350px]">
        <Image
          src={banner}
          layout="fill"
          placeholder="blur"
          blurDataURL="LF7d,x_3xuRj~q_3xuRj_3?bt7Rj"
          alt="How to find on Nearmistry"
          quality={100}
          objectFit="cover"
        />
      </div>
      <div className="sm:block md:hidden max-w-xs  absolute z-[20] left-0 right-0 mx-auto  ">
        <PlacesSearchBar />
      </div>
    </>
  );
}

export default Banner;
