import Header from "../Components/Header";
import { useRouter } from "next/router";
export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="absolute top-0 left-0 right-0 bottom-0 m-auto text-center w-[300spx] h-[100px]">
        <div className="text-4xl font-thin lg:text-5xl">Thanks for your interest. </div>
        <div className="text-3xl font-thin lg:text-4xl">We're working on it.</div>
        <br />
        <button
          className="text-[#3f51b5] font-bold uppercase text-sm px-6 py-3 mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={()=> router.push('/')}
        >
          &#8592;Back❤️
        </button>
      </div>
    </div>
  );
}
