import {
  faClock,
  faHeadphones,
  faLocation,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LOGO from "../Images/LOGO.png";
const Nest = () => {
  return (
    <div className="flex items-center justify-start    w-full gap-8 flex-col">
      <img className="w-52" src={LOGO} alt="" />
      <div className=" flex text-md flex-col gap-4 text-left text-gray-700">
        <p className="flex items-center">
          <span>
            <FontAwesomeIcon
              className="text-[#3bb77e] px-2"
              icon={faLocation}
            />
          </span>
          Kent,Utah 53423 United States
        </p>
        <p className="flex items-center ">
          <span>
            <FontAwesomeIcon
              className="text-[#3bb77e] px-2"
              icon={faHeadphones}
            />
          </span>
          Call us
          <span className="text-[#3bb77e]">
            <a
              href="tel:0130346343
          6"
            >
              (+880)1303463436
            </a>
          </span>
        </p>
        <p className="flex items-center">
          <span>
            <FontAwesomeIcon
              className="text-[#3bb77e] px-2"
              icon={faMailBulk}
            />
          </span>
          Email <span className="text-[#3bb77e]">Sale@Fest.com</span>
        </p>
        <p className="flex items-center">
          <span>
            <FontAwesomeIcon className="text-[#3bb77e] px-2" icon={faClock} />
          </span>
          Hours 10:00-18:00 ,Mon-Sat
        </p>
      </div>
    </div>
  );
};

export default Nest;
