import { useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import Social from "../../Components/SocialBlock/Social";
import Blog from "../../Components/Blog/Blog";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import BlogContext from "../../context/BlogContext";
import "./BlogContent.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

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
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="rich_headers preserve-whitespace">{children}</h3>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="rich_headers">{children}</h2>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="rich_headers">{children}</h1>
      ),
      [BLOCKS.OL_LIST]: (node, children) => <ol className="">{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="">{children}</ul>,
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
  console.log(blogDetails[0]?.fields.domain);
  return (
    <div className="article_content_container">
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
                <Social />
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
    </div>
  );
}

export default BlogContent;
