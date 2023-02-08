import { Helmet } from "react-helmet";
import { solarangeImages } from "assets/volsterImages/data";
function Solarange() {
  return (
    <div>
      <Helmet>
        <title>Solarange - Navarc</title>
      </Helmet>
      {solarangeImages &&
        solarangeImages.map((image) => (
          <div key={image.id}>
            <picture className="flex flex-col items-center">
              <img src={image.image} alt={image.title} />
            </picture>
          </div>
        ))}
    </div>
  );
}

export default Solarange;
