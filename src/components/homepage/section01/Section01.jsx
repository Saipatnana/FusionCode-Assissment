import section01Styles from "./section01.module.css";
import { CmnComp } from "../../common/CmnComp";
import { useRef, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
const data1 = {
  header: "Timely gifts",
  description:
    "With the festivities fast-approaching, explore a range of gifts fit for all manner of recipients, ready to deliver or collect in-store. ",
  button: "Discover more",
};
const data2 = {
  header: "Four bundles for hair, hands and home",
  description:
    "The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. Available exclusively on aesop.com.",
  button: "Explore bundles",
};

export const Section01 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const startTouch = useRef(0); // To track the start position of the touch

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3); // Two slides, so modulo 2
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 3); // Two slides, so modulo 2
  };

  const handleTouchStart = (e) => {
    startTouch.current = e.touches[0].clientX; // Record the starting position of the touch
  };

  const handleTouchEnd = (e) => {
    const endTouch = e.changedTouches[0].clientX; // Get the end position of the touch
    const swipeDistance = startTouch.current - endTouch;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        nextSlide(); // Swipe left
      } else {
        prevSlide(); // Swipe right
      }
    }
  };

  return (
    <div className="overflow-hidden relative" onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}>
      <div
        className={`flex transition-transform duration-500`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {/* Slide 1 */}
        <section
          className={`${section01Styles.section01} flex-shrink-0 w-full`}
        >
          <div>
            <div>
              <img src="./Images/Aesop_logo.svg" alt="Aesop_logo" />
            </div>
            <CmnComp props={data1} />
          </div>

          <div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={`${section01Styles.video}`}
              src="./Images/Aesop_section01_video01.mp4"
            >
              <source
                src="./Images/Aesop_section01_video01.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={section01Styles.video}
              src="https://videos.ctfassets.net/u1nb1km7t5q7/6JzSxhFyL6bmdlL2H6MayX/134fa9955c49b1fd96055c2e73309c0c/Aesop_Gift_Kits_2024-25_Web_Homepage_3_Primary_50-50_Mobile_900x900px.mp4"
            >
              <source
                src="https://videos.ctfassets.net/u1nb1km7t5q7/6JzSxhFyL6bmdlL2H6MayX/134fa9955c49b1fd96055c2e73309c0c/Aesop_Gift_Kits_2024-25_Web_Homepage_3_Primary_50-50_Mobile_900x900px.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        {/* Slide 2 */}
        <section
          className={`${section01Styles.section01} flex-shrink-0 w-full`}
        >
          <div>
            <div>
              <img src="./Images/Aesop_logo.svg" alt="Aesop_logo" />
            </div>
            <CmnComp props={data2} />
          </div>

          <div>
            <img
              src="./Images/Aesop_section01_image01.jpg"
              alt="Aesop_section01_image02"
            />
          </div>
          <div>
            <img
              className={section01Styles.video}
              src="./Images/Aesop_section01_image01.jpg"
              alt="Aesop_section01_image02"
            />
          </div>
        </section>
        {/* Slide 3 */}
        <section
          className={`${section01Styles.section01} flex-shrink-0 w-full`}
        >
          <div>
            <div>
              <img src="./Images/Aesop_logo.svg" alt="Aesop_logo" />
            </div>
            <CmnComp props={data2} />
          </div>

          <div>
            <img
              src="./Images/Aesop_section01_image03.avif"
              alt="Aesop_section01_image02"
            />
          </div>
          <div>
            <img
              className={section01Styles.video}
              src="./Images/Aesop_section01_image03.avif"
              alt="Aesop_section01_image02"
            />
          </div>
        </section>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-2 space-x-4">
        <button
          onClick={prevSlide}
          className="text-[#666666] bg-transparent px-0 py-0"
        >
          <SlArrowLeft/>
        </button>
        <span className="text-lg  text-[#666666]">
          {currentSlide + 1}/3
        </span>
        <button
          onClick={nextSlide}
          className="text-[#666666] bg-transparent px-0 py-0"
        >
          <SlArrowRight/>
        </button>
      </div>
    </div>
  );
};
