import imagePreview from "../../assets/Images/preview.png";
import serveimage from "../../assets/Images/serveimage.png";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog_container">
      <div className="preview_image_container">
        <img src={serveimage} alt="" />
      </div>
      <div className="text_container">
        <div className="title_and_summary">
          <h3>Five Means to take advantage of the web3 and AI</h3>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <p className="topic">Tech and Science</p>
      </div>
    </div>
  );
}

export default Blog;
