import Link from "next/link";
import Image from "next/image";
import controller from "../public/assets/controller.webp";

export default function Footer() {
  return (
    <footer class=" bg-black text-gray-600 body-font ">

      <div class="bg-black">
        <div class="container mx-auto py-4 px-5 flex flex-wrap justify-center flex-col sm:flex-row">
          <p class="text-slate-200 text-sm text-center sm:text-left">
            Copyright © 2022 —
            <a
              href="https://instagram.com/irmawan_008"
              rel="noopener noreferrer"
              class="text-slate-200 ml-1"
              target="_blank"
            >
              Nabila Hana Saphira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
