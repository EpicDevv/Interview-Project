import React from "react";
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { RiPhoneFill } from "@react-icons/all-files/ri/RiPhoneFill";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
import Raiting from "./Raiting";

function HotelHeader({ setToggleLocationTab, hotel }) {
  // setToggleLocationTab is a function that is passed down from the parent component (hotelpagecontent) to the child component (hotelheader) and is used to set the state of the nav bar this state gets set to true when the strip icon is clicked in the header and this will toggle the display of the location tab in the nav bar  also setting the map view to true

  return (
    <header className="mx-4 md:mx-16 lg:mx-0 lg:mr-5 lg:mb-16 sm:flex sm:justify-between mb-5">
      <div className="sm:flex-col lg:-mt-4 sm:mt-[6px]">
        <div className="flex mb-1 lg:mb-0 sm:mb-[15px] items-baseline">
          <h1 className="text-[#6b6c7a] font-light lg:text-[50px] text-[40px]">
            {hotel?.name.toUpperCase() || ""}
          </h1>
          <Raiting value={hotel?.starRating} />
          {/* raiting is a component that takes a value 0.0 - 5.0 and returns the correct rating of stars depindin on what prop is passed in. for instance this case is 4.5 returning 4.5 stars */}
        </div>
        <div className="flex  items-center lg:text-[18px] text-[14px] text-[#6b6c7a]">
          <div
            className="cursor-pointer flex hover:text-[#895e95] items-center"
            onClick={() =>
              // when user clicks on the strip icon in the header, set the state of the toggleLocationTab to true and then send the props to the child component (hotelnav)
              {
                setToggleLocationTab(true);
              }
            }
          >
            <MdLocationOn />
            <h2 className="mr-2">{hotel?.location.areaName}</h2>
          </div>
          <RiPhoneFill className="mr-1" />
          <h2 className="mr-2">{hotel?.phoneNumber}</h2>
          <FaThumbsUp className="mr-1" />
          <h2 className="mr-2">Best Price Guarantee</h2>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse sm:items-end lg:items-start sm:mt-0 lg:-mt-4 items-baseline justify-between mt-3">
        <div>
          <h1 className="text-[20px] lg:-mt-1 font-light text-[#6b6c7a]">
            HOTEL ROOMS FROM
          </h1>
        </div>
        <div>
          <h1 className="text-[50px] text-[#f48721] font-bold">
            ${hotel?.price}
          </h1>
        </div>
      </div>
    </header>
  );
}

export default HotelHeader;
