import { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NavShowContext from "../../context/NavShowContext";
import BurgerMenu from "../../Components/OpenBurgerMenu/BurgerMenu";
import Banner from "../../assets/Images/Banner.png";
import Social from "../../Components/SocialBlock/Social";
import Blog from "../../Components/Blog/Blog";
import Testimony from "../../Components/Testimonials&Contacts/Testimony/Testimony";
import Footer from "../../Components/Footer/Footer";
import "./BlogContent.css";

function BlogContent() {
  const { hideNav, showNav } = useContext(NavShowContext);

  return (
    <div className="article_content_container">
      {showNav && <BurgerMenu />}
      {hideNav && <NavBar />}

      <div className="control_content">
        <div className="blog_content_banner">
          <img src={Banner} alt="Blog content banner" />
        </div>
        <div className="text_content_and_socials">
          <div className="text_content">
            <div className="titles">
              <p>Tagline</p>
              <h3>Title Explaining Why It’s Worth Reading</h3>
            </div>
            <div className="textBlog">
              <p>
                Amet sit sit dolor bibendum. Curabitur scelerisque egestas nisl
                purus neque suscipit mauris. Egestas vitae felis a amet ut massa
                cursus mollis adipiscing. Magna habitant amet egestas sed sed.
                In nascetur tempus arcu bibendum quisque commodo. Lectus at cras
                elit a morbi lectus nisl. Sem amet quam odio vitae habitant
                blandit. Suspendisse at metus camet sem non commodo sit. Dolor
                sed nisi maecenas ut laoreet faucibus quisque. Nec tristique
                purus duis vitae mauris amet. At blandit adipiscing ipsum tempor
                ullamcorper diam porttitor pellentesque arcu. Non ornare
                pellentesque nunc lacus lacinia et massa. Sed sit dui luctus
                diam quis dignissim vestibulum iaculis feugiat. Laoreet laoreet
                dignissim amet eros vestibulum. Ridiculus quis nulla massa duis
                sit diam egestas iaculis. Arcu sagittis consequat id massa. Amet
                diam ac rhoncus quam. Libero id non sodales semper diam dictum
                amet non. Gravida elementum amet cras enim. Dictum consectetur
                pharetra tempus mattis iaculis molestie mauris. Urna ut
                curabitur ac non vitae feugiat fringilla turpis vehicula.
                Viverra at massa at mi. Sapien orci mi odio ornare lectus. Proin
                ipsum congue libero sit habitasse nibh. Mattis dis purus eget
                est vivamus. Sodales sagittis nibh tincidunt morbi magna
                pellentesque aliquam egestas semper. Laoreet leo ac praesent
                dictum at et dictum aliquam. Interdum lobortis tristique viverra
                accumsan venenatis. Ipsum dui sit tellus viverra. Vestibulum
                libero blandit mi urna commodo leo tempus id. Ut nunc mauris
                eros eget montes tortor. Ut commodo consequat varius adipiscing.
                Mauris tellus sit enim non pharetra tellus vitae.
              </p>
            </div>
          </div>
          <div className="socialStyleController">
            <Social />
          </div>
        </div>
        <div className="relatedPosts">
          <h4>Related Posts :</h4>
          <div className="posts">
            <Blog />
            <Blog />
            <Blog />
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
