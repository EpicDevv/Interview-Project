import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeroImage from "./HeroImage";
import HotelHeader from "./HotelHeader";
import HotelList from "./HotelList";
import HotelNav from "./HotelNav";
import HotelSearchLink from "./HotelSearchLink";

export default function Home({ hotel }) {
  // (togglelocationtab) This is state to handle the location tab when strip and location icon is clicked in the header. I am using a call back function that is sending props from the child component (hotelheader) to this parent then back down to the child component (hotelnav) this provides the functionality of clicking the strip icon and setting the nav and map view to true
  const [toggleLocationTab, setToggleLocationTab] = useState(false);

  return (
    <main>
      <HotelSearchLink />
      <section className="lg:absolute lg:w-[330px] lg:top-18 lg:left-5">
        <HeroImage hotel={hotel} />
      </section>
      <section className="lg:ml-[380px]">
        <HotelHeader 
          hotel={hotel}
          setToggleLocationTab={setToggleLocationTab}
        />
        <HotelNav
          hotel={hotel}
          setToggleLocationTab={setToggleLocationTab}
          toggleLocationTab={toggleLocationTab}
        />
      </section>
      <section className="lg:absolute left-5 top-[308px]">
        <HotelList />
      </section>
    </main>
  );
}
