import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import HotelPageContent from "../components/HotelPageContent";
import Raiting from "../components/Raiting";
export default function Home({ products }) {
  // state to store hotel data retrieved from api endpoint
  const [hotel, setHotel] = useState([]);

  // use effect runs on every render and calls a function that accesses the hotel data from our api endpoint and sets it to the state
  useEffect(() => {
    const fetchHotelData = async () => {
      const response = await fetch("/api/venetian");
      const data = await response.json();
      setHotel(data);
    };
    fetchHotelData();
  }, []);
  return (
    <div className="">
      <Head>
        <title>Vegas Exercise</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="Developing a next js tailwind css app for vegas.com "
        />
        <meta property="og:title" content="Modern web App built with next js" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/assets/images/next js.png" />
        <meta
          property="og:description"
          content="Modern web app built by Zayne Lovecraft"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Vegas Web App" />
      </Head >
      {/* Reusable component for other hotel listings */} 
      {/* I would use get static paths so Next.js would statically pre-render all the paths for all hotel listings, however that is only possible with external database so this is the simpler version to show reusable component  */}
      {/* I would use get static props with get static paths with the ISR feature to dynamically render dynamic static html pages apon ever request to server but for this example Im using built in api with get request to serve json  */}
      {/* Completely Mobile Responsive */}
      {hotel.map((hotel) => (
      <HotelPageContent key={hotel.name} hotel={hotel} />
      ))}

    </div>
  );
}
