import Link from "next/link";
import Image from "next/image";
import joystick from "../public/assets/joystick.png";

export default function Header() {
  return (
    <header class="text-gray-600 body-font bg-black">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image alt="icon" src={joystick} width="50" height="50" />
          <div class="text-left">
            <span class="ml-3 text-xl text-white font-extrabold">GAMESHOP</span>
            <p class="ml-3  text-sm text-slate-200">All you need is here</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
