import { ArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Card = ({ link, name }) => {
  return (
    <div className="relative w-full rounded-2xl">
      <div className="relative rounded-2xl  w-full">
        <img className="w-full rounded-2xl" src={link} alt="" />
      </div>
      <div className="absolute  gap-4 items-start flex flex-col w-80  text-left  left-8 top-12">
        <h1 className="text-2xl  font-semibold">{name} </h1>
        <Button
          varient="contained"
          style={{
            backgroundColor: "#3bb77e",
            fontSize: "14px",
            color: "white",
          }}
        >
          ShopNow <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Card;
