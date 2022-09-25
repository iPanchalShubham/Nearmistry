import Image from "next/image";
import PropTypes from "prop-types";
function ItemsImages({ img }) {
  return (
    <div className="hover:scale-105 transform transition duration-100 ease-in ">
      <div className="relative h-[330px] w-[250px] rounded-lg">
        <Image src={img} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
ItemsImages.propstype = {
  img: PropTypes.string,
};
export default ItemsImages;
