import Header from "components/Static_components/Header";
import { useRouter } from "next/router";
export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="translate-y-[200%]">
        <div className="text-center">
          <div className="text-4xl font-thin lg:text-5xl">
            Thanks for your interest.{" "}
          </div>
          <div className="text-3xl font-thin lg:text-4xl">
            We&apos;re working on it.
          </div>
          <br />
          <button
            className="text-[#3f51b5] font-bold uppercase text-sm"
            type="button"
            onClick={() => router.back()}
          >
            &#8592;Back❤️
          </button>
        </div>
      </div>
    </>
  );
}
