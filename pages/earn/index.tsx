import { FunctionComponent, PropsWithChildren } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Layout/Content";
import EarnBox from "../../components/Earn";

const Earn: FunctionComponent<PropsWithChildren> = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <EarnBox />
      </Content>
    </Layout>
  );
};

export default Earn;
