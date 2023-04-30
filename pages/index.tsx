import Image from "next/image";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { useMenu } from "../hooks/context";
import Header from "../components/Header";
import TitleCard from "../components/TitleCard";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const { isOpen } = useMenu();

  return (
    <div
      id="container"
      className="grid grid-cols-12 h-screen w-full text-ape_white"
    >
      {isOpen ? (
        <section id="nav" className={`bg-ape_dark_purple col-span-2`}>
          <SideBar />
        </section>
      ) : null}

      <section
        id="main"
        className={`bg-thuigray ${
          isOpen ? "col-span-10" : "col-span-12"
        } bg-ape_dark_purple2`}
      >
        <MainPage />
        <Footer />
      </section>
    </div>
  );
};

const MainPage = () => {
  const { isConnected } = useAccount();
  const { isOpen } = useMenu();
  return (
    <div className="h-screen">
      <Header />
      <div
        id="main-content-warpper"
        className={`flex justify-center items-center ${
          isOpen ? "mt-[15%]" : "mt-[6%]"
        }`}
      >
        <TitleCard />
      </div>
    </div>
  );
};

export default Home;
