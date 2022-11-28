import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="py-4  bg-black sticky bottom-0 z-50 body-font">
      <nav class="md:ml-auto ml-4 flex flex-wrap items-center text-base justify-center ">
        <Link href="/" class="mr-5">
          <div className="ml-2">
          </div>
          <p className="hover:text-emerald-300 text-slate-200 font-bold">Home</p>
        </Link>
        <Link href="/gamelist" class="mr-5 ">
          <div className="ml-3">
          </div>
          <p className="hover:text-emerald-300 text-slate-200 font-bold">
            Game
          </p>
        </Link>
        <Link href="/news" class="mr-5 ">
          <div className="ml-10">
          </div>
          <p className="hover:text-emerald-300 text-slate-200 font-bold">
            Game News
          </p>
        </Link>
        <Link href="/aboutus" class="mr-5">
          <div className="ml-3">
          </div>
          <p className="hover:text-emerald-300 text-slate-200 font-bold">
            About
          </p>
        </Link>
      </nav>
    </section>
  );
}
