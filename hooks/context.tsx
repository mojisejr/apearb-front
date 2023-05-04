import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type appContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const appContextDefaultValue: appContextType = {
  isOpen: false,
  open: () => {},
  close: () => {},
};

const AppContext = createContext<appContextType>(appContextDefaultValue);

type Props = {
  children: ReactNode;
};

export function MenuProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  function open() {
    if (isOpen == false) {
      setIsOpen(true);
    }
  }

  function close() {
    if (isOpen == true) {
      setIsOpen(false);
    }
  }

  const value = {
    isOpen,
    open,
    close,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useMenu() {
  return useContext(AppContext);
}
