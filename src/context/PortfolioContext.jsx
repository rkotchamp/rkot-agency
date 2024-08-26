import { useCallback, useEffect, useState } from "react";
import { createContext } from "react";
import { createClient } from "contentful";

const PortfolioContext = createContext();

export function PortfolioContextProvider({ children }) {
  const [project, setProject] = useState([]);

  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACEID_KEY,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESSTOKEN_KEY,
  });

  const getProjects = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "portfolioProjects",
      });
      setProject(response.items);
      // console.log(response.items);
    } catch (error) {
      console.error(error);
    }
  }, [setProject]);

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <PortfolioContext.Provider value={{ project, setProject }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContext;
