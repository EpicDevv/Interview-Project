import { stringify } from "postcss";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";
import { IoIosArrowDropupCircle } from "@react-icons/all-files/io/IoIosArrowDropupCircle";

function Description({ hotel }) {
  const [description, setDescription] = useState();
  // description is the mutated description data retrieved from the api call
  const [showFullDescription, setShowFullDescription] = useState(false);
  // showFullDescription is the state that handles the view of the description text when the user clicks the read more button
  const beginningOfDescriptionRef = useRef();
  // beginningOfDescriptionRef is the ref that is used to scroll the top of the description text to top of window when the user clicks the read more button
  const endOfDescriptionRef = useRef();
  // endOfDescriptionRef is the ref that is used to scroll back to the top of the page when the user clicks the read less button

  // reusable function that is used to get the description data from the api call and set the state of a modified description that can be used to display the description text correctly in the description tab. Again this code is completely reusable and can be used in any component that needs to display the description text as long as the description data formatted correctly.
  const renderDescription = () => {
    // turn the description data from json into a string that can be used to modify the description text that contains escape sequences that are not recognized by the browser we will use these to know where to cut up the string and create an array that can be mapped over to display the description text correctly in paragraph format
    let description = JSON.stringify(hotel?.description);
    if (description?.length > 0) {
      // checking to make sure that description data is not empty so we can proceed with the code
      const splitArr = description.split(/\\r\\n\\[a-zA-Z]\\[a-zA-Z]/g);
      // split the description data into an array of strings that can be mapped over to display the description text correctly in paragraph format
      for (let i = 0; i < splitArr.length; i++) {
        // loop through the array of strings and remove the remaining escape sequences
        splitArr[i] = splitArr[i].replace(/\\/g, "");
        if (splitArr[0] === splitArr[i]) {
          // in the first string of the array we remove the quote marks at the beginning of the string
          splitArr[0] = splitArr[0].slice(1);
        }
        if (splitArr[splitArr.length - 1] === splitArr[i]) {
          // in the last string of the array we remove the quote marks at the end of the string
          splitArr[splitArr.length - 1] = splitArr[splitArr.length - 1].slice(
            0,
            -1
          );
        }
      }
      setDescription(splitArr);
      // set the state of the modified description that can be used to display the description text correctly in the description tab
    }
  };

  // runs the renderDescription function when the page loads to modify the description data and set the state of the modified description that can be used to display the description text correctly in the description tab
  useEffect(() => {
    renderDescription();
  }, [hotel]);

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
        {/* map over description array to display in paragraph format */}
        {description?.map((text, index) => (
          <p className="mb-5 text-[20px] font-extralight" key={index}>
            {text}
          </p>
        ))}
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
