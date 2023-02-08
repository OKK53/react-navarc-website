import React from "react";
import { social } from "assets/volsterImages/data";
import { useLanguage } from "context/LanguageContext";
function ContactInfo() {
  const { language } = useLanguage();
  const textContact = language === "tr" ? "Bize Ulaşın" : "Contact us";
  const textComp =
    language === "tr"
      ? "NAVARC MÜHENDİSLİK VE TEKNOLOJİ LTD. ŞTİ."
      : "Navarc Engineering and Technology LC.";
  const tel = language === "tr" ? "tel" : "phone";
  return (
    <div className="flex flex-col m-2">
      <h1 className="grid text-2xl antialiased grid-cols-1 items-center text-center">
        {textContact}
      </h1>
      <hr />
      <div className="my-2 mx-3 flex flex-col items-start ">
        <h3 className="mb-3 font-semibold antialiased">{textComp}</h3>
        <label className="text-sm antialiased mb-4">
          <p>Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. </p>
          <p>
            Kuluçka Mrk. D2 Blok Kat:-2 Ofis No:26 151 /1F 2B03 Esenler/İstanbul
          </p>
        </label>
        <span className="capitalize text-base antialiased mb-4">
          {tel}: +90 535 255 8880
        </span>
        <a
          className="capitalize text-base antialiased mb-4"
          href="info@navarc.com.tr"
        >
          mail: info@navarc.com.tr
        </a>
        <ul className="flex justify-center items-center gap-x-3">
          {social.map((socialIcon) => (
            <li key={socialIcon.id}>
              <a
                className="text-xl text-gray-600  transition-all rounded shadow"
                href={socialIcon.url}
                target="_blank"
                rel="noreferrer"
              >
                {socialIcon.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactInfo;
