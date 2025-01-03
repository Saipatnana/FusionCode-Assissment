import React from "react";

const Section10 = () => {
  return (
    <div className="w-full flex flex-col p-5 gap-16 items-center justify-betwee box-border md:flex-row md:gap-5 md:grid md:grid-cols-2 md:px-20 md:mt-20">
      <div>
        <div>
          <img src="./Images/Aesop_section10_image01.avif" alt="image01" />
        </div>
        <div className="mt-5">
          <p className="hover:underline text-md py-3 font-semibold">
            Six aromatic encounters
          </p>
          <p>
            Fragrance Anthology Volume I invites curious noses to explore and
            experience our range of unorthodox aromas, from the fresh to the
            floral, the woody and the opulent.
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
            src="./Images/Aesop_section10_video.mp4">
            <source
              src="./Images/Aesop_section10_video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="mt-5">
          <p className="hover:underline text-md py-3 font-semibold">Home gifts</p>
          <p>
            From hand care to home fragrances, explore a curation of products
            that are ideal for hospitable hosts, the house-proud or the recently
            moved in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section10;
