import Slider from "react-slick";
import { featuredLogos } from "assets/volsterImages/data";

function Featured() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="container mx-auto py-8">
      <Slider {...settings}>
        {featuredLogos &&
          featuredLogos.map((logo) => (
            <div key={logo.id}>
              <picture className="flex flex-col items-center">
                <img
                  className="h-12 md:h-24"
                  src={logo.image}
                  alt={logo.title}
                />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Featured;
