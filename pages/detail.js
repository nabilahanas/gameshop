import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!router.query.data) return;
    setData(JSON.parse(router.query.data).data);
  }, []);

  return (
    <div>
      <Meta title="Detail" />

      <Header />

      <section class="text-gray-600 body-font bg-black">
        <div class="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="cover"
            width="720"
            height="600"
            src={data ? data.thumbnail : ""}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-3xl text-2xl mb-4 font-bold text-emerald-400 ">
              {data ? data.title : ""}
            </h1>
            <p class="mb-8 leading-relaxed text-slate-200">
              {data ? data.description : ""}
            </p>
          </div>
          <Link 
            href="/gamelist" 
            class="text-white bg-emerald-300 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-400 rounded inline-flex items-center">
              Back</Link>
        </div>
      </section>
      <Navbar />

      <Footer />
    </div>
  );
}
