import React, { useEffect, useRef, useState } from "react";
import Description from "./Description";
import Details from "./Details";
import Location from "./Location";

function HotelNav({ toggleLocationTab, setToggleLocationTab, hotel }) {
  // state for handling the active tab in the nav bar (description, details, location)
  //   show description set to true by default when the page loads
  const [showDescription, setShowDescription] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  
  // useeffect listens for the toggleLocationTab state to change defined on the index page when user clicks on the strip in the header and sets the state of the nav bar accordingly
  useEffect(() => {
    if (toggleLocationTab === true) {
      openLocation();
      // reset the toggleLocationTab state back to false so if user clicks the other nav bar tabs then clicks the strip again the state will be false and will be able to open the location tab again basically resets the functionality of the strip icon
      setToggleLocationTab(false);
    }
  }, [toggleLocationTab]);

  // function to toggle location open when strip is clicked in the header
  const openLocation = () => {
    setShowDescription(false);
    setShowDetails(false);
    setShowLocation(true);
  };

  // toggleMenu()
  //  get the active tab and set the state to true for the active tab and set the state to false for the inactive tabs  (description, details, location)
  //   parameter (menu) is the name of the tab that is clicked on
  //   if the description tab is clicked on, set the state to true for the description tab and set the state to false for the other tabs
  //   description tab will always be true if the page loads and the description tab is clicked on
  //  if the details tab is clicked on, set the state to true for the details tab and set the state to false for the other tabs
  // if the location tab is clicked on, set the state to true for the location tab and set the state to false for the other tabs
  // end toggleMenu()

  const toggleMenu = (menu) => {
    switch (menu) {
      case "description":
        setShowDescription(true);
        setShowDetails(false);
        setShowLocation(false);

        break;
      case "details":
        setShowDetails(!showDetails);
        setShowDescription(false);
        setShowLocation(false);
        break;
      case "location":
        setShowLocation(!showLocation);
        setShowDescription(false);
        setShowDetails(false);
        break;
      default:
        break;
    }
  };
  // if all the tabs are closed then show the description tab by default
  useEffect(() => {
    if (
      showDescription === false &&
      showDetails === false &&
      showLocation === false
    ) {
      setShowDescription(true);
    }
  }, [showLocation, showDetails, showDescription]);

  return (
    //   the nav bar is a list of links that are clickable
    <section className="lg:mr-5">
      <nav className=" bg-[#895e95] ">
        <ul className="flex justify-center font-medium">
          <li
            onClick={() => {
              toggleMenu("description");
            }}
            className={`py-4  text-center hover:text-opacity-100 text-[18px] font-light cursor-pointer ${
              showDescription
                ? "text-white border-b-4 border-[#733080]"
                : "text-white text-opacity-50"
            }   w-full `}
          >
            <span className="ml-3 sm:ml-0">DESCRIPTION</span>
          </li>
          <li
            onClick={() => {
              toggleMenu("details");
            }}
            className={`py-4 text-center hover:text-opacity-100 text-[18px] font-light cursor-pointer ${
              showDetails
                ? "text-white border-b-4 border-[#733080]"
                : "text-white text-opacity-50"
            }   w-full `}
          >
            DETAILS
          </li>
          <li
            onClick={() => {
              toggleMenu("location");
            }}
            className={`py-4 text-center hover:text-opacity-100 text-[18px] font-light cursor-pointer ${
              showLocation
                ? "text-white border-b-4 border-[#733080]"
                : "text-white text-opacity-50"
            }   w-full `}
          >
            LOCATION
          </li>
        </ul>
      </nav>
      <article className=" mt-5">
        {/* the information to display depending on what menu icon is clicked */}
        {showDescription && <Description hotel={hotel} />}
        {showDetails && <Details hotel={hotel} />}
        {showLocation && (
          <Location toggleLocationTab={toggleLocationTab} hotel={hotel} />
        )}
      </article>
    </section>
  );
}

export default HotelNav;
