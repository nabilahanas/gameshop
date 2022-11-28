import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Moregame from "../components/Moregame"

export default function Tools() {
  return (
    <div>
      <Meta title="News" />
      <Header />
      <Moregame />
      <Navbar />
      <Footer />
    </div>
  );
}
