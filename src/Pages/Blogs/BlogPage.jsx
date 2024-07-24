import { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import Blog from "../../Components/Blog/Blog";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import "./BlogPage.css";

function BlogPage() {
  const { hideNav, showNav } = useContext(NavShowContext);

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
