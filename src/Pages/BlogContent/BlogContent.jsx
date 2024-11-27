import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import Social from "../../Components/SocialBlock/Social";
import Blog from "../../Components/Blog/Blog";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import BlogContext from "../../context/BlogContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import SEO from "../../Components/SEO/SEO";
import CopyPopUp from "../../Components/CopyPopUp/CopyPopUp";
// import { Helmet } from "react-helmet";

import "./BlogContent.css";

function BlogContent() {
  const { hideNav, showNav } = useContext(NavShowContext);
  const { realBlog } = useContext(BlogContext);
  const { id } = useParams();

  // Filter to find the blog post with the matching id
  const blogDetails = realBlog.filter((item) => item.sys.id === id);

  const currentDomain = blogDetails[0]?.fields.domain;
  const relatedPosts = realBlog.filter(
    (item) => item.fields.domain === currentDomain && item.sys.id !== id
  );

  const RICHTEXT_OPTION = {
    preserveWhitespace: true,
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="paraRichTExt">{children}</p>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="rich_headers preserve-whitespace">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="rich_headers preserve-whitespace">{children}</h4>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="rich_headers">{children}</h2>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="rich_headers">{children}</h1>
      ),
      [BLOCKS.OL_LIST]: (node, children) => <ol className="">{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="unordered">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="">{children}</li>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file } = node.data.target.fields;
        const imageUrl = file.url;
        return <img src={imageUrl} alt={title} className="embedded-asset" />;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="hyperlink">
            {children}
          </a>
        );
      },
    },
  };

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

  return (
    <div className="article_content_container">
      <SEO
        title={blogDetails[0]?.fields?.title}
        companyName="Rkot Designs"
        description={blogDetails[0]?.fields?.summaryNote}
        type="summary"
        imageCoverUrl={blogDetails[0]?.fields?.coverImage?.fields?.file?.url}
        pageUrl={`https://www.rkotdesigns.com/blogs/${id}`}
        canLink={`https://www.rkotdesigns.com/blogs/${id}`}
      />

      {showNav && <BurgerMenu />}
      {hideNav && <NavBar />}

      <div className="control_content">
        {blogDetails.length > 0 ? (
          <>
            <div className="blog_content_banner">
              <img
                src={blogDetails[0]?.fields?.coverImage?.fields?.file?.url}
                alt="Blog content banner"
              />
            </div>
            <div className="text_content_and_socials">
              <div className="text_content">
                <div className="titles">
                  <p>{blogDetails[0]?.fields?.domain}</p>
                  <h3>{blogDetails[0]?.fields?.title}</h3>
                </div>
                <div className="textBlog">
                  {documentToReactComponents(
                    blogDetails[0]?.fields?.content,
                    RICHTEXT_OPTION
                  )}
                </div>
              </div>
              <div className="socialStyleController">
                {/* <CopyPopUp /> */}
                <Social
                  imageBannerUrl={
                    blogDetails[0]?.fields?.coverImage?.fields?.file?.url
                  }
                />
              </div>
            </div>
          </>
        ) : (
          <p>Blog not found</p>
        )}

        <div className="relatedPosts">
          <h4>Related Posts :</h4>
          <div className="posts">
            {relatedPosts.length > 0 ? (
              <Blog posts={relatedPosts} />
            ) : (
              <p>No Related Post</p>
            )}
          </div>
        </div>
        <div className="controlContact">
          <Testimony />
        </div>
        <Footer />
      </div>

      <div>
        <chat-widget
          location-id={import.meta.env.WIDGET_LOCATION_ID}
        ></chat-widget>
      </div>
    </div>
  );
}

export default BlogContent;
