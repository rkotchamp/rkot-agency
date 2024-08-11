import { useContext, useState, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import Blog from "../../Components/Blog/Blog";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import { createClient } from "contentful";
import "./BlogPage.css";

function BlogPage() {
  const { hideNav, showNav } = useContext(NavShowContext);
  const [blogPage, SetBlogPage] = useState([]);

  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACEID_KEY,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESSTOKEN_KEY,
  });

  useEffect(() => {
    const getBlogPage = async () => {
      try {
        await client.getEntries().then((entries) => console.log(entries));
      } catch (error) {
        console.error(error);
      }
    };
    getBlogPage();
  }, []);

  return (
    <div className="blogPage_container">
      {showNav && <BurgerMenu />}
      {hideNav && <NavBar />}
      <div className="main">
        <div className="styleEntirePage">
          <div className="content_main_banner">
            <h2>Posts and Articles that are worth reading</h2>
          </div>
          <div className="section_topic_and_grid">
            <h2>Latest Stories</h2>
            <div className="render_article_container">
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
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
