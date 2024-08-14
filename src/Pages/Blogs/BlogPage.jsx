import { useContext, useState, useEffect, useCallback } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import Blog from "../../Components/Blog/Blog";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import { createClient } from "contentful";
import BlogContext from "../../context/BlogContext";
import "./BlogPage.css";

function BlogPage() {
  const { hideNav, showNav } = useContext(NavShowContext);
  const { realBlog } = useContext(BlogContext);
  const [blogPage, setBlogPage] = useState([]);

  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACEID_KEY,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESSTOKEN_KEY,
  });

  const getBlogPage = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "agencyBlogPage",
      });

      setBlogPage(response.items);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getBlogPage();
  }, [getBlogPage]);

  return (
    <div className="blogPage_container">
      {showNav && <BurgerMenu />}
      {hideNav && <NavBar />}

      <div className="main">
        <div className="styleEntirePage">
          {blogPage.map((item, index) => {
            return item.fields.publish === true ? (
              <div className="content_main_banner" key={index}>
                <h2>{item.fields.title}</h2>
                <img
                  src={item.fields.pageCover.fields.file.url}
                  alt="Web development agency blog age banner"
                  className="coverImage"
                />
              </div>
            ) : null;
          })}

          <div className="section_topic_and_grid">
            <h2>Latest Stories</h2>
            <div className="render_article_container">
              <Blog posts={realBlog} />
            </div>
          </div>
        </div>
      </div>
      <Testimony />
      <Footer />
    </div>
  );
}

export default BlogPage;
