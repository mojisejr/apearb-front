import { FunctionComponent, PropsWithChildren } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Layout/Content";
import TokenomicBox from "../../components/Tokenomics";

const Tokenomic: FunctionComponent<PropsWithChildren> = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <TokenomicBox />
      </Content>
    </Layout>
  );
};

export default Tokenomic;
