import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import { pages } from "./data/pages";

const HorizontalAutoScrollGallery = () => {
  const settings = {
    centerMode: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-screen sm:w-[calc(100vw-120px)] 2xl:w-[1180px]">
      <Slider {...settings}>
        {pages.map((page, index) => {
          return (
            <div key={index}>
              <ProjectCard page={page} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HorizontalAutoScrollGallery;
