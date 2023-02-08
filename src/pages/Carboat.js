import { Helmet } from "react-helmet";
import { carboatImages } from "assets/volsterImages/data";
import Slider from "react-slick";

function Carboat() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  return (
    <div>
      <Helmet>
        <title>Carboat - Navarc</title>
      </Helmet>
      <Slider {...settings}>
        {carboatImages &&
          carboatImages.map((image) => (
            <div key={image.id}>
              <picture className="flex flex-col items-center">
                <img src={image.image} alt={image.title} />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Carboat;
