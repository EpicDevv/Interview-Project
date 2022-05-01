import Image from "next/image";
import React from "react";
import HeroImg from '../images/venetian-1.jpeg';
function HeroImage({ hotel }) {
  return (
    <figure className="relative w-[100%] lg:h-[212px] sm:h-[375px] md:h-[450px] h-[250px] ">
      {/* im not dynamically rendering the image because I ended up using a different image with higher resolution and I couldn't get the image paths to work correctly this is something I can work around but I didn't get the time to. */}
      <Image
        src={HeroImg}
        layout="fill"
        alt="pics"
        objectFit="cover"
        priority={true}
      />
    </figure>
  );
}

export default HeroImage;
