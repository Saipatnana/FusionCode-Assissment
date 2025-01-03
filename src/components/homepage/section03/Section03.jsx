import { CmnComp } from "../../common/CmnComp";
import section03Styles from "./section03.module.css";

const data = {
  title: "Our online offering ",
  header: "Gestures to enhance your experience",
  description:
    "Discover a suite of complimentary additions available with every order, including curated product samples, gift wrapping in our signature cotton bag and personalised gift messaging. ",
  button: "Explore our online offering",
};

export const Section03 = () => {
  return (
    <section className={section03Styles.section03}>
      <div>
        <CmnComp props={data} />
      </div>
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          src="./Images/Aesop_section03_video01.mp4"
        >
          <source
            src="./Images/Aesop_section03_video01.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};
