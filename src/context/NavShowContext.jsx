import { createContext, useState } from "react";

const NavShowContext = createContext();

export function NavShowProvider({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [hideNav, setHideNav] = useState(true);
  return (
    <NavShowContext.Provider
      value={{ showNav, setShowNav, hideNav, setHideNav }}
    >
      {children}
    </NavShowContext.Provider>
  );
}

export default NavShowContext;
