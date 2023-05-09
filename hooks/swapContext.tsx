import { ReactNode, createContext, useContext, useState } from "react";

type appSwapContextType = {
  isSwapLoading: boolean;
  isApproveLoading: boolean;
  setSwapLoading: (state: boolean) => void;
  setApproveLoading: (state: boolean) => void;
};

const appContextDefaultValue: appSwapContextType = {
  isSwapLoading: false,
  isApproveLoading: false,
  setSwapLoading: () => {},
  setApproveLoading: () => {},
};

const AppSwapContext = createContext<appSwapContextType>(
  appContextDefaultValue
);

type Props = {
  children: ReactNode;
};

export function AppSwapProvider({ children }: Props) {
  const [isSwapLoading, setSwapLoadingState] = useState(false);
  const [isApproveLoading, setApproveLoadingState] = useState(false);

  function setSwapLoading(state: boolean) {
    setSwapLoadingState(state);
  }

  function setApproveLoading(state: boolean) {
    setApproveLoadingState(state);
  }

  const value = {
    isSwapLoading,
    isApproveLoading,
    setSwapLoading,
    setApproveLoading,
  };

  return (
    <AppSwapContext.Provider value={value}>{children}</AppSwapContext.Provider>
  );
}

export function useAppSwapContext() {
  return useContext(AppSwapContext);
}
