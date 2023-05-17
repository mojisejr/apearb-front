import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { WagmiConfig, configureChains, createClient, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { sepolia } from "wagmi/chains";
import { bitkub_mainnet, bitkub_testnet } from "../blockchain/chain";
import { AppProvider } from "../hooks/context";
import { AppSwapProvider } from "../hooks/swapContext";

const { chains, provider } = configureChains(
  [bitkub_mainnet, bitkub_testnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "PepeKub",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <AppProvider>
            <AppSwapProvider>
              <Component {...pageProps} />
            </AppSwapProvider>
          </AppProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
}

export default MyApp;
