import { useContext } from "react";
import BlogContext from "../../context/BlogContext";
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const { realBlog } = useContext(BlogContext);
  // console.log(realBlog);

  return (
    <>
      {realBlog.map((item, index) => {
        return item.fields.publish ? (
          <Link to={`/blogs/${item.sys.id}`}>
            <div className="blog_container" key={index}>
              <div className="preview_image_container">
                <img src={item.fields.coverImage.fields.file.url} alt="" />
              </div>
              <div className="text_container">
                <div className="title_and_summary">
                  <h3>{item.fields.title}</h3>
                  <p>{item.fields.summaryNote}</p>
                </div>
                <p className="topic">{item.fields.domain}</p>
              </div>
            </div>
          </Link>
        ) : null;
      })}
    </>
  );
}

export default Blog;
