import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { volsterImages } from "assets/volsterImages/data";
import { Link } from "react-router-dom";
import { useLanguage } from "context/LanguageContext";

function Volster() {
  const { language } = useLanguage();
  const textVolster =
    language === "tr"
      ? "Teknik, Standart ve Opsiyonel Özellikleri görmek için tıklayınız."
      : "Click to see Technical, Standard and Optional Features.";
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
        <title>Doğuştan Elektrikli Tekne Volster'i Keşfet</title>
      </Helmet>
      <Slider {...settings}>
        {volsterImages &&
          volsterImages.map((image) => (
            <div key={image.id}>
              <picture className="flex flex-col items-center">
                <img src={image.image} alt={image.title} />
              </picture>
            </div>
          ))}
      </Slider>
      <div className="container mx-auto items-center text-center text-3xl font-semibold antialiased py-4 text-blue-300 hover:text-blue-600">
        <Link to={"/projects/volster/details"}>{textVolster}</Link>
      </div>
    </div>
  );
}

export default Volster;
