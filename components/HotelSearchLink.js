import Link from "next/link";
import React from "react";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
function HotelSearchLink() {
  // simple search link that appears in the header
  return (
    <nav className=" py-4">
      <Link className="cursor-pointer" href="/">
        <a className="text-[#895e95] ml-4 inline-flex hover:text-opacity-70 items-center font-light">
          <IoIosArrowDropleftCircle className="mr-1 text-[18px]" />
          SEE ALL LAS VEGAS HOTELS
        </a>
      </Link>
    </nav>
  );
}

export default HotelSearchLink;
