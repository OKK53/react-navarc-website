import { useState } from "react";
import logo from "assets/Navarc-Logo.png";
import { links, DropdownLinks } from "assets/volsterImages/data";
import { IoMdGlobe } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLanguage } from "context/LanguageContext";
import Dropdown from "./Dropdown";
import { IoIosMenu, IoIosClose } from "react-icons/io";

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const { language, dispatch } = useLanguage();
  const [open, setOpen] = useState(false);
  const switchLanguage = () => {
    dispatch({
      type: "TOGGLE_LANGUAGE",
    });
  };
  //openbar

  //console.log(open)
  return (
    <nav className="bg-slate-50">
      <div className="container mx-auto flex items-center justify-around py-4">
        <div className="z-50 pl-7 p-5 md:p-0 md:w-auto w-full flex justify-between">
          <Link to={"/"}>
            <img src={logo} alt="navarc-logo" className="cursor-pointer h-9 " />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {(open && <IoIosClose />) || <IoIosMenu />}
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-x-6 capitalize transition-all tracking-widest">
          {links.map((link) => {
            const { id, url, textEn, textTr } = link;
            if (textEn === "projects" || textTr === "projeler") {
              return (
                <li
                  className="p-2"
                  key={id}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link
                    className="flex items-center gap-x-1 hover:text-blue-500"
                    to={url}
                  >
                    {language === "tr" ? textTr : textEn} {link.icon}
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li className="p-2 hover:text-blue-500" key={id}>
                <Link to={url}>{language === "tr" ? textTr : textEn}</Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center justify-between relative gap-x-1">
          <IoMdGlobe className="text-xl" />
          <button
            onClick={switchLanguage}
            className="uppercase w-10 border rounded  p-1 shadow-sm antialiased  text-sm font-semibold hover:bg-blue-400 hover:text-white transition-all"
          >
            {language}
          </button>
        </div>
        {/* Mobile nav */}
        <ul
          className={`md:hidden bg-white absolute w-full h-full bottom-0 items-center py-24 pl-4 capitalize transition-all tracking-widest z-20 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          {links.map((link) => {
            const { id, url, textEn, textTr } = link;
            if (textEn === "projects" || textTr === "projeler") {
              return (
                <li className="py-7 px-3 text-left" key={id}>
                  <div className="flex items-center justify-between pr-3">
                    <Link
                      to={url}
                      className="hover:text-blue-500"
                      onClick={() => setOpen(!open)}
                    >
                      {language === "tr" ? textTr : textEn}{" "}
                    </Link>
                    <button onClick={() => setDropdown(!dropdown)}>
                      {link.icon}
                    </button>
                  </div>
                  <div className="text-sm text-gray-500 mt-3 transition-all">
                    {dropdown &&
                      DropdownLinks.map((dropLink) => {
                        return (
                          <div className="py-2" key={dropLink.id}>
                            <Link
                              to={dropLink.url}
                              className="hover:text-blue-500"
                              onClick={() => setOpen(!open)}
                            >
                              {dropLink.title}
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                </li>
              );
            }
            return (
              <li className="py-7 px-3 text-left" key={id}>
                <Link
                  to={url}
                  className="hover:text-blue-500"
                  onClick={() => setOpen(!open)}
                >
                  {language === "tr" ? textTr : textEn}
                </Link>
              </li>
            );
          })}
          <div className="flex px-3 items-center gap-x-2 py-5">
            <IoMdGlobe className="text-xl" />
            <button
              onClick={switchLanguage}
              className="uppercase w-10 border rounded  p-1 shadow-sm antialiased  text-sm font-semibold hover:bg-blue-400 hover:text-white transition-all"
            >
              {language}
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
