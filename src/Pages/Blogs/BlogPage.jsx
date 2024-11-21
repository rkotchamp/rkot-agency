import { useContext, useState, useEffect, useCallback } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import Blog from "../../Components/Blog/Blog";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import { createClient } from "contentful";
import BlogContext from "../../context/BlogContext";
import SEO from "../../Components/SEO/SEO";
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.dataset.resourcesUrl =
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
    document.body.appendChild(script);

    // Cleanup the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // console.log(blogPage[0]?.fields.pageCover?.fields?.file?.url);

  return (
    <div className="blogPage_container">
      {blogPage.length > 0 && (
        <SEO
          title={blogPage[0]?.fields.title}
          companyName="Rkot Designs"
          description="Blogs to improve the creative side of your business"
          type="summary"
          imageCoverUrl={blogPage[0]?.fields.pageCover?.fields?.file?.url}
          pageUrl="https://www.rkotdesigns.com/blogs"
          canLink="https://www.rkotdesigns.com/blogs"
        />
      )}
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
      <div>
        <chat-widget
          location-id={import.meta.env.WIDGET_LOCATION_ID}
        ></chat-widget>
      </div>
    </div>
  );
}

export default BlogPage;
