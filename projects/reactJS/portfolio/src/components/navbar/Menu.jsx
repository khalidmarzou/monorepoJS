import React from "react";
import { Link, useLocation } from "react-router-dom";

import Icon from "../Icon";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";

export default function Menu() {
  const location = useLocation();

  const paths = [
    { path: "/about", icon: faUser, libelle: "ABOUT" },
    { path: "/resume", icon: faFileLines, libelle: "RESUME" },
    { path: "/works", icon: faLaravel, libelle: "WORKS" },
    { path: "/blogs", icon: faBlog, libelle: "BLOGS" },
    { path: "/contact", icon: faAddressBook, libelle: "CONTACT" },
  ];

  return (
    <div className="bg-white w-full md:w-32 flex md:flex-col md:py-2 gap-2 md:h-auto h-20 px-2 md:px-0 md:rounded items-center justify-evenly text-lg md:me-2 md:relative bottom-12 left-4 z-50">
      {paths.map((p, index, arr) => (
        <>
          <Path path={p} key={index} />
          {index < arr.length - 1 && (
            <div className="md:w-full md:h-[1px] w-[1px] h-full md:bg-gradient-to-r bg-gradient-to-b from-white via-gray-200 to-gray-400"></div>
          )}
        </>
      ))}
    </div>
  );
}

const Path = ({ path }) => {
  return (
    <Link
      to={path.path}
      className={`bg-white ${
        location.pathname == path.path ? "text-[#78CC6D]" : "hover:text-[#78CC6D]"
      } w-12 text-center py-2 m-0 rounded-md flex flex-col items-center gap-2`}
    >
      <Icon icon={path.icon} />
      <span className="text-sm text-center">{path.libelle}</span>
    </Link>
  );
};
