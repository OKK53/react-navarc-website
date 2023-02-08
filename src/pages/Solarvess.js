import { Helmet } from "react-helmet";
import { solarvessImages } from "assets/volsterImages/data";
import Slider from "react-slick";

function Solarvess() {
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
        <title>Solarvess Serisi - Navarc</title>
      </Helmet>
      <Slider {...settings}>
        {solarvessImages &&
          solarvessImages.map((image) => (
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

export default Solarvess;
