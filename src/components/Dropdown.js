import React from "react";
import { DropdownLinks } from "assets/volsterImages/data";
import { Link } from "react-router-dom";
export default function Dropdown() {
  return (
    <div className="block w-11 -mx-5">
      <ul className="absolute mt-2 text-start z-20 border bg-white">
        {DropdownLinks.map((link) => {
          const { id, url, title } = link;
          return (
            <li className="cursor-pointer p-4 " key={id}>
              <Link className="capitalize hover:text-blue-500" to={url}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
