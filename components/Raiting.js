import React from "react";
import { BsStar } from "@react-icons/all-files/bs/BsStar";
import { BsStarHalf } from "@react-icons/all-files/bs/BsStarHalf";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";

function Raiting({ value }) {
  // value is passed in thru the props and is used to determine the rating of stars to display

  // three different stars are returned depending on the value passed in
  const getStar = (value) => {
    switch (value) {
      case 0:
        return <BsStar className="text-[#9999a3] ml-1 text-[15px]" />;
      case 50:
        return <BsStarHalf className="text-[#9999a3] ml-1 text-[15px]" />;
      case 100:
        return <BsStarFill className="text-[#9999a3] ml-1 text-[15px]" />;
    }
  };

  // returns the correct stars to display based on the value passed in
  const getStars = (value) => {
    switch (parseFloat(value)) {
      case 0.0:
        return [0, 0, 0, 0, 0];
      case 0.5:
        return [50, 0, 0, 0, 0];
      case 1.0:
        return [100, 0, 0, 0, 0];
      case 1.5:
        return [100, 50, 0, 0, 0];
      case 2.0:
        return [100, 100, 0, 0, 0];
      case 2.5:
        return [100, 100, 50, 0, 0];
      case 3.0:
        return [100, 100, 100, 0, 0];
      case 3.5:
        return [100, 100, 100, 50, 0];
      case 4.0:
        return [100, 100, 100, 100, 0];
      case 4.5:
        return [100, 100, 100, 100, 50];
      case 5.0:
        return [100, 100, 100, 100, 100];
    }
  };

  return (
    <div className="flex">
      {/* depending on value from parent component getstars() returns an array of 5 values(100 50 0) that gets mapped and each value gets passed to getstar function that then returns the corresponding star depending on what value gets passed in */}
      {getStars(value)?.map((value, index) => (
        <div key={index}>{getStar(value)}</div>
      ))}
    </div>
  );
}

export default Raiting;
