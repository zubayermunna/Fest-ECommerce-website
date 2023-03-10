import React from "react";
import NavPart from "./NavPart";
import ResponsiveNav from "./ResponsiveNav";
import SearchPart from "./SearchPart";

const Navbar = () => {
  return (
    <div className="flex z-10 sticky  lg:relative top-0 bg-white  w-full">
      <div className=" lg:flex w-full relative lg:flex-col hidden">
        <SearchPart></SearchPart>
        <NavPart></NavPart>
      </div>
      <div className="lg:hidden w-full flex">
        <ResponsiveNav></ResponsiveNav>
      </div>
    </div>
  );
};

export default Navbar;
