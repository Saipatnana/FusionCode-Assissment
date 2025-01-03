import React from "react";

const Section11 = () => {
  return (
    <div className="w-full flex flex-col p-5 gap-16 items-center justify-betwee box-border md:flex-row md:gap-5 md:grid md:grid-cols-2 md:px-20 md:mt-20">
      <div>
        <div>
          <img src="./Images/aesop_section11_image01.avif" alt="image01" />
        </div>
        <div className="mt-5">
          <p className="hover:underline text-md py-3 font-semibold">
            For their travel bag
          </p>
          <p>
            Explore a range of travel-size formulations for seasoned
            excursionists, including preselected kits, sun care and in-flight
            essentials.
          </p>
        </div>
      </div>
      <div>
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            src="./Images/Aesop_section11_video01.mp4"
          >
            <source src="./Images/Aesop_section11_video01.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mt-5">
          <p className="hover:underline text-md py-3 font-semibold">
            Noteworthy gifts
          </p>
          <p>
            From time-honoured body care to standout skin care—explore a range
            of formulations that remain dependably crowd-pleasing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section11;
