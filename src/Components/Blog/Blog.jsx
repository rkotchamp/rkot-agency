import imagePreview from "../../assets/Images/preview.png";
import serveimage from "../../assets/Images/serveimage.png";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog_container">
      <div className="preview_image_container">
        <img src={serveimage} alt="" />
      </div>
      <h2>Five Means to take advantage of the web3 and AI</h2>
    </div>
  );
}

export default Blog;
