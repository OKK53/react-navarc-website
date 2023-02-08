import { links, social } from "assets/volsterImages/data";
import { Link } from "react-router-dom";
import { useLanguage } from "context/LanguageContext";
function Footer() {
  const { language } = useLanguage();
  const textComp =
    language === "tr"
      ? "NAVARC MÜHENDİSLİK VE TEKNOLOJİ LTD. ŞTİ."
      : "Navarc Engineering and Technology LC.";
  const textRights =
    language === "tr" ? "Tüm hakları saklıdır" : "All rights reserved";
  return (
    <footer className="container mx-auto border-t-2 mt-1">
      <div className="container mx-auto items-center text-center">
        <h1 className="text-base md:text-xl mt-2 font-semibold tracking-wide antialiased">
          {textComp}
        </h1>
        <div>
          <ul className="flex mt-5 mb-5 justify-center items-center gap-x-6 capitalize tracking-widest">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="flex justify-center mb-6 items-center gap-x-4">
            {social.map((socialIcon) => (
              <li key={socialIcon.id}>
                <a
                  className="text-3xl mt-2 text-gray-600  transition-all rounded shadow "
                  href={socialIcon.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {socialIcon.icon}
                </a>
              </li>
            ))}
          </ul>
          <span className="flex justify-center font-light items-center text-center mb-1 tracking-tight antialiased">
            &#169; NavarcTech. {textRights}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
