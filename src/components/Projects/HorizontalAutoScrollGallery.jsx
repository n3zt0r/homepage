import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

const HorizontalAutoScrollGallery = () => {
  const images = [
    {
      name: "Homepage",
      img: "./projects/homepage.jpg",
      url: "https://nestor-lopez-homepage.onrender.com/",
    },
    {
      name: "Stopwatch",
      img: "./projects/stopwatch.jpg",
      url: "https://n3zt0r.github.io/stopwatch/",
    },
    {
      name: "Keeper App",
      img: "./projects/keeper-app.jpg",
      url: "https://n3zt0r-keeper-app.onrender.com/",
    },
    {
      name: "To Do List v2.0",
      img: "./projects/to-do-list.jpg",
      url: "https://n3zt0r-to-do-list.onrender.com/",
    },
    {
      name: "Anime:findeR",
      img: "./projects/anime-finder.jpg",
      url: "https://n3zt0r-anime-finder.onrender.com/",
    },
  ];

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
          dots: false,
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-screen sm:w-[calc(100vw-120px)] 2xl:w-[1180px]">
      <Slider {...settings}>
        {images.map(({ name, img, url }, index) => {
          return (
            <div key={index}>
              <ProjectCard name={name} img={img} url={url} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HorizontalAutoScrollGallery;
