import Image from "next/image";
function itemsImages({ img}) {
  return (
    <div className="hover:scale-105 transform transition duration-100 ease-in" >
        <div className="relative h-80 w-40 rounded-lg">
          <Image src={img} layout="fill" objectFit="contain"  />
        </div>
    </div>
  );
}

export default itemsImages;
