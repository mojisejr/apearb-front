import { FunctionComponent, PropsWithChildren } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Layout/Content";
import HoneyPotBox from "../../components/HoneyPot";
import Image from "next/image";
import { useAccount } from "wagmi";

const HoneyPot: FunctionComponent<PropsWithChildren> = () => {
  const { isConnected } = useAccount();
  return (
    <Layout>
      <Header />
      <Content>
        <div className="w-full flex justify-center items-center flex-col gap-3 text-pepe_white text-[30px]">
          <div>Pepe Pot Krubbbb!</div>
          <Image src="/images/blue.png" width={450} height={450} alt="blue" />
        </div>
        {/* {isConnected ? (
          <HoneyPotBox />
        ) : (
          <div className="w-full flex justify-center items-center flex-col gap-3 text-pepe_white text-[30px]">
            <div>Pepe Pot Krubbbb!</div>
            <Image src="/images/blue.png" width={450} height={450} alt="blue" />
          </div>
        )} */}
      </Content>
    </Layout>
  );
};

export default HoneyPot;
