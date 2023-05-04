import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { ConnectWalletButton } from "../components/ConnectWalletBtn";

const Home: NextPage = () => {
  const { isConnected } = useAccount();

  return (
    <div
      id="container"
      className="grid grid-cols-12 h-screen w-full text-pepe_white bg-[url('/images/pepetranparent.png')]"
    ></div>
  );
};

export default Home;
