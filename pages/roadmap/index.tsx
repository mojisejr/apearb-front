import { FunctionComponent, PropsWithChildren } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Layout/Content";
import RoadmapBox from "../../components/Roadmap";

const Roadmap: FunctionComponent<PropsWithChildren> = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <RoadmapBox />
      </Content>
    </Layout>
  );
};

export default Roadmap;
