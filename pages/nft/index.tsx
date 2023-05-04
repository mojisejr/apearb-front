import { FunctionComponent, PropsWithChildren } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Layout/Content";
import NFTBox from "../../components/NFT";

const Roadmap: FunctionComponent<PropsWithChildren> = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <NFTBox />
      </Content>
    </Layout>
  );
};

export default Roadmap;
