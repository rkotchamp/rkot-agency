import { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import Blog from "../../Components/Blog/Blog";

import "./BlogPage.css";

function BlogPage() {
  const { hideNav, showNav } = useContext(NavShowContext);

  return (
    <div className="blogPage_container">
      {showNav && <BurgerMenu />}
      {hideNav && <NavBar />}
      <div className="content_main_banner">
        <h2>Posts and Articles that are worth reading</h2>
      </div>
      <div className="render_article_container">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}

export default BlogPage;
