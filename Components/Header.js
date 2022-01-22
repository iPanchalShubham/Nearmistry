import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
function Header() {
  const router = useRouter()
  return (
    <div className="sticky top-0 z-50 grid grid-flow-col pl-3 py-4 bg-gradient-to-r from-[#5370cf] via-[#5385cf] to-[#5370cf] text-white shadow-md">
      <MenuIcon className="h-7 w-7 cursor-pointer" />

      <div className="text-3xl font-semibold cursor-pointer" onClick={() => router.push('/')} >Nearmistry</div>
    </div>
  );
}

export default Header;
