import { stringify } from "postcss";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";
import { IoIosArrowDropupCircle } from "@react-icons/all-files/io/IoIosArrowDropupCircle";

function Description({ hotel }) {
  // const [description, setDescription] = useState();
  // description is the mutated description data retrieved from the api call
  const [showFullDescription, setShowFullDescription] = useState(false);
  // showFullDescription is the state that handles the view of the description text when the user clicks the read more button
  const beginningOfDescriptionRef = useRef();
  // beginningOfDescriptionRef is the ref that is used to scroll the top of the description text to top of window when the user clicks the read more button
  const endOfDescriptionRef = useRef();
  // endOfDescriptionRef is the ref that is used to scroll back to the top of the page when the user clicks the read less button

  return (
    <article className=" lg:mx-5 mx-8 md:mx-28 pb-20">
      {/* div absolutely set at top of window to scroll into view when user clicks hide full description */}
      <div ref={endOfDescriptionRef} className="absolute top-0 right-0"></div>
      {/* div absolutely set at top of window to scroll into view when user clicks hide full description */}
      <section
        ref={beginningOfDescriptionRef}
        className={`w-full ${
          showFullDescription ? "h-full" : "h-[200px]"
        }  overflow-hidden`}
      >
        <div>
          <pre className="font-extralight font-sans whitespace-pre-line text-[20px]">
            {hotel.description}
          </pre>
        </div>
      </section>
      {showFullDescription ? (
        <button
          onClick={() => {
            setShowFullDescription(!showFullDescription);
            endOfDescriptionRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-5 font-extralight flex items-center text-[#895e95] text-[20px]"
        >
          HIDE FULL DESCRIPTION
          <IoIosArrowDropupCircle className="ml-2 text-[#895e95]" />
        </button>
      ) : (
        <button
          onClick={() => {
            setShowFullDescription(!showFullDescription);
            beginningOfDescriptionRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="mt-5 font-extralight flex items-center text-[#895e95] text-[20px]"
        >
          SHOW FULL DESCRIPTION
          <IoIosArrowDropdownCircle className="ml-2 text-[#895e95]" />
        </button>
      )}
    </article>
  );
}

export default Description;
