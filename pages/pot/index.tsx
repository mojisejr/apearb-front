import { FunctionComponent, PropsWithChildren } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Layout/Content";
import HoneyPotBox from "../../components/HoneyPot";
import { useGetPotData } from "../../blockchain/HoneyPot/Pot.read";

const HoneyPot: FunctionComponent<PropsWithChildren> = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <HoneyPotBox />
      </Content>
    </Layout>
  );
};

export default HoneyPot;
