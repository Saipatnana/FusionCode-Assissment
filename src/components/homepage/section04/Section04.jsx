import { CmnComp } from "../../common/CmnComp";
import section04Styles from "./section04.module.css";

const data = {
  title: "Festive giving",
  header: "A complimentary sleeve for your gifts",
  description:
    "Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the ‘gift packaging’ option at checkout. Exclusions apply.",
  button: "Explore gifts",
};

export const Section04 = () => {
  return (
    <section className={section04Styles.section04}>
      <div>
        <img src="./Images/Aesop_section04_image.jpg" alt="section04" />
      </div>
      <div>
        <CmnComp props={data} />
      </div>
    </section>
  );
};
