import { FunctionComponent, PropsWithChildren } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Content from "../../components/Layout/Content";
import AboutBox from "../../components/About";

const About: FunctionComponent<PropsWithChildren> = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <AboutBox />
      </Content>
    </Layout>
  );
};

export default About;
