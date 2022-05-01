import React, { useEffect, useRef } from "react";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import Image from "next/image";
import mapimg from "../images/map_venetian.png";
function Location({ hotel, toggleLocationTab }) {
  const scrollToMapRef = useRef();

  // useEffect listens for the toggleLocationTab state to change, defined on the index page when user clicks on the strip in the header and sets the state of the nav bar accordingly
  useEffect(() => {
    scrollToMapRef.current.scrollIntoView({ behavior: "smooth" });
  }, [toggleLocationTab]);


  return (
    <section className="mb-8 lg:mx-5 md:mx-28 mx-8">
      <div
        ref={scrollToMapRef}
        className="flex sm:flex-row sm:items-center sm:space-x-2 mb-2 text-[20px]  font-extralight flex-col"
      >
        <MdLocationOn />
        <h1>{hotel.location.address}</h1>
        <h1>{hotel.location.city}</h1>
        <h1>{hotel.location.state}</h1>
        <h1>{hotel.location.postalCode}</h1>
      </div>
      <div>
        <figure className="relative -mt-18 md:-mt-[40px] md:mx-0 w-full lg:-mt-28 lg:w-[600px] xl:w-[820px] xl:-mt-2 lg:mx-auto -z-10 md:h-[800px] h-[600px] ">
          <Image src={mapimg} layout="fill" alt="pics" objectFit="contain" />
        </figure>
      </div>
    </section>
  );
}

export default Location;
