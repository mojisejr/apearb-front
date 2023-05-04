import { FunctionComponent, PropsWithChildren } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Layout/Content";
import BuyBox from "../../components/Howtobuy";

const Howtobuy: FunctionComponent<PropsWithChildren> = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <BuyBox />
      </Content>
    </Layout>
  );
};

export default Howtobuy;
