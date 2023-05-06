import type { NextPage } from "next";
import { useAccount } from "wagmi";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Content from "../components/Layout/Content";
import Title from "../components/Home/Title";

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Title />
      </Content>
    </Layout>
  );
};

export default Home;
