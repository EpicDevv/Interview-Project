import { stringify } from "postcss";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";
import { IoIosArrowDropupCircle } from "@react-icons/all-files/io/IoIosArrowDropupCircle";

// details is the mutated details data retrieved from the api call
function Details({ hotel }) {
  const [showFullDetails, setShowFullDetails] = useState(false);
  // showFullDetails is the state that handles the view of the details text when the user clicks the read more button
  const beginningOfDetailsRef = useRef();
  // beginningOfDetailsRef is the ref that is used to scroll the top of the details text to top of window when the user clicks the read more button
  const endOfDetailsRef = useRef();
  // endOfDetailsRef is the ref that is used to scroll back to the top of the page when the user clicks the read less button

  return (
    <article className="md:mx-28 lg:mx-5 mx-8 pb-20">
      <div ref={endOfDetailsRef} className="absolute top-0 right-0"></div>
      <section
        ref={beginningOfDetailsRef}
        className={`w-full ${
          showFullDetails ? "h-full" : "h-[200px]"
        }  overflow-hidden`}
      >
        {/* map over hotel details to display each detail */}
        {hotel.details.map((detail, index) => (
          <div className="mb-5" key={index}>
            <h3 className="text-[20px]">{detail.label}</h3>
            <p className="text-[20px] font-extralight">{detail.value}</p>
          </div>
        ))}
      </section>
      {showFullDetails ? (
        <button
          onClick={() => {
            setShowFullDetails(!showFullDetails);
            endOfDetailsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-5 font-extralight flex items-center text-[#895e95] text-[20px]"
        >
          VIEW FEWER DETAILS
          <IoIosArrowDropupCircle className="ml-2 text-[#895e95]" />
        </button>
      ) : (
        <button
          onClick={() => {
            setShowFullDetails(!showFullDetails);
            beginningOfDetailsRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="mt-5 font-extralight flex items-center text-[#895e95] text-[20px]"
        >
          VIEW MORE DETAILS
          <IoIosArrowDropdownCircle className="ml-2 text-[#895e95]" />
        </button>
      )}
    </article>
  );
}

export default Details;
