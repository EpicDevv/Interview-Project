import React, { useEffect, useState } from "react";

function HotelList() {
  // state to store hotel data retrieved from api endpoint
  const [hotelList, setHotelList] = useState([]);

  // use effect runs on every render and calls a function that accesses the hotel data from our api endpoint and sets it to the state
  useEffect(() => {
    // fetch the hotel data from the api endpoint
    const fetchHotelData = async () => {
      const response = await fetch("/api/available-hotels");
      const data = await response.json();
      // sort the data and remove duplicates
      const newArray = data[0].list.filter(
        (value, index, self) =>
          index ===
          self.findIndex(
            (t) => t.place === value.place && t.name === value.name
          )
      );
      // order the data alphabetically
      newArray.sort((a, b) => a.name.localeCompare(b.name));
      // set the data to the state
      setHotelList(newArray);

    };
    fetchHotelData();
  }, []);

  return (
    <section className="mx-8 lg:mx-0 md:mx-32 mb-10">
      <div className="bg-[#efefef] py-5 lg:w-[330px] w-full h-full">
        {hotelList?.map((hotel) => (
          <div key={hotel.code}>
            <div className="flex justify-between hover:opacity-50 cursor-pointer mx-5 font-light items-baseline mb-5">
              <h1 className="text-[#8c679c] pr-8">{hotel.name}</h1>
              <h1 className="text-[#9999a3]">${hotel.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotelList;
