import { createContext, useState, useEffect, useCallback } from "react";
import { createClient } from "contentful";

const BlogContext = createContext();

export function BlogContextProvider({ children }) {
  const [realBlog, setRealBlog] = useState([]);

  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACEID_KEY,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESSTOKEN_KEY,
  });

  const getRealBlog = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "agencyBlogPost",
      });
      setRealBlog(response.items);
    } catch (error) {
      console.error(error);
    }
  }, [setRealBlog]);

  useEffect(() => {
    getRealBlog();
  }, []);

  return (
    <BlogContext.Provider value={{ setRealBlog, realBlog }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContext;
