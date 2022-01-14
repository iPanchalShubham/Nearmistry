import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
function Header() {
  const router = useRouter()
  return (
    <div className="sticky top-0 z-50 grid grid-flow-col pl-3 py-4 bg-white">
      <MenuIcon className="h-7 w-7 cursor-pointer" />

      <div className="text-2xl font-semibold cursor-pointer" onClick={() => router.push('/')} >NearMistry.com</div>
    </div>
  );
}

export default Header;
