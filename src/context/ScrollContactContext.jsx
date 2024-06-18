import { createContext, useRef } from "react";

const ScrollToContactContext = createContext();

export const ScrollToContactProvider = ({ children }) => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ScrollToContactContext.Provider value={{ contactRef, scrollToContact }}>
      {children}
    </ScrollToContactContext.Provider>
  );
};

export default ScrollToContactContext;
