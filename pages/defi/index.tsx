import { FunctionComponent, PropsWithChildren } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Layout/Content";
import DefiBox from "../../components/Defi";

const Defi: FunctionComponent<PropsWithChildren> = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <DefiBox />
      </Content>
    </Layout>
  );
};

export default Defi;
