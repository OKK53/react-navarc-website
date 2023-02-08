import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "context/LanguageContext";
import VolsterBrosur_tr from "assets/volsterImages/VolsterBrosur_tr.jpg";
import VolsterBrosur_en from "assets/volsterImages/VolsterBrosur_en.jpg";
function Details() {
  const { language } = useLanguage();
  return (
    <div>
      <Helmet>
        <title>Volster Technical Standard and Optional Features</title>
      </Helmet>
      <div>
        <picture>
          <img
            src={language === "tr" ? VolsterBrosur_tr : VolsterBrosur_en}
            alt={language === "tr" ? "VolsterBrosur" : "VolsterBrochure"}
          />
        </picture>
      </div>
    </div>
  );
}

export default Details;
