import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import SectionTitle from "@/components/ui/SectionTitle";
const Gallery = () => {
  return (
    <div className="container my-10">
      <SectionTitle name="Gallery" title="Explore captivating scenes" />
      <LightGallery
        elementClassNames="max-w-5xl mx-auto columns-1 sm:columns-2  md:columns-4  lg:columns-5 "
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        <a href="images/donation0.jpg">
          <img className="my-3" alt="" src="images/donation0.jpg" />
        </a>
        <a href="images/donation1.jpg">
          <img className="my-3" alt="" src="images/donation1.jpg" />
        </a>
        <a href="images/donation3.jpg">
          <img className="my-3" alt="" src="images/donation3.jpg" />
        </a>
        <a href="images/donation4.jpg">
          <img className="my-3" alt="" src="images/donation4.jpg" />
        </a>
        <a href="images/donation5.jpg">
          <img className="my-3" alt="" src="images/donation5.jpg" />
        </a>
        <a href="images/donation6.jpg">
          <img className="my-3" alt="" src="images/donation6.jpg" />
        </a>
        <a href="images/donation7.jpg">
          <img className="my-3" alt="" src="images/donation7.jpg" />
        </a>
        <a href="images/donation8.jpg">
          <img className="my-3" alt="" src="images/donation8.jpg" />
        </a>
        <a href="images/donation9.jpg">
          <img className="my-3" alt="" src="images/donation9.jpg" />
        </a>
        <a href="images/donation10.jpg">
          <img className="my-3" alt="" src="images/donation10.jpg" />
        </a>
        <a href="images/donation11.jpg">
          <img className="my-3" alt="" src="images/donation11.jpg" />
        </a>
        <a href="images/donation12.png">
          <img className="my-3" alt="" src="images/donation12.png" />
        </a>
        <a href="images/donation13.jpg">
          <img className="my-3" alt="" src="images/donation13.jpg" />
        </a>
        <a href="images/donation14.webp">
          <img className="my-3" alt="" src="images/donation14.webp" />
        </a>
      </LightGallery>
      <div></div>
    </div>
  );
};

export default Gallery;
