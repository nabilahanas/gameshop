import Image from "next/image";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import banner from "../public/assets/banner.webp";
import Navbar from "../components/Navbar";

export default function Aboutus() {
  return (
    <div>
      <Meta title="About" />
      <Header />
      <section class="text-gray-600 body-font bg-black">
        <div class="container px-5 py-16 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <Image
                alt="banner"
                class="object-cover object-center h-full w-full"
                width="2000"
                height="2000"
                src={banner}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-900 text-gray-400 ">
                  <Image
                    alt="profile"
                    className="rounded-full object-cover"
                    height={400}
                    width={400}
                    src="https://avatars.githubusercontent.com/u/73371159?v=4"
                  />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg text-white">
                    Nabila Hana Saphira
                  </h2>
                  <div class="w-12 h-1 bg-emerald-500 rounded mt-2 mb-4"></div>
                  <p class="text-base text-slate-200">
                  Why is it that the character for happiness '幸' includes the money '￥' sign? 
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-emerald-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4 text-slate-200">
                  Gameshop is a game sales information application made using Next.js using {' '}
                  <a href="https://rapidapi.com/digiwalls/api/gamerpower/" target="_blank" rel="noreferrer">
                    <span className="hover:text-emerald-300 text-slate-200">
                      GamerPower API 
                    </span>
                  </a>
                  <span>{" "}and{" "}</span>
                  <a href="https://rapidapi.com/digiwalls/api/mmo-games/" target="_blank" rel="noreferrer">
                    <span className="hover:text-emerald-300 text-slate-200">
                        MMO Games API
                    </span>
                    <span>.</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
      <Footer />
    </div>
  );
}
