import { ImgCarousel } from "../../carousal/ImgCarousel";
import { CmnComp } from "../../common/CmnComp";
import section08Styles from "./section08.module.css";

const Images = [
  { imgSrc: "https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg" },
  { imgSrc: "https://www.aesop.com/u1nb1km7t5q7/3zcvjyxtts2FpeU5DHqO93/d075d2ac71f0a36fe38fce6fd2fb8155/Aesop_Hollywood_Road_II_Hero_Bleed_Desktop_2880x1620px.jpg" },
  { imgSrc: "https://www.aesop.com/u1nb1km7t5q7/5nCXNArWXByYfegWzHEJW7/b36df9798e899b8d0eed4b3f053a570c/Aesop_MO_Store_Venetian_II_Hero_Bleed_Desktop_2880x1620px.jpg" },
];

const data = {
  header: "Store locator",
  description:
    "Our consultants are available to host you in-store and provide tailored guidance on gift purchases. ",
  button: "Find a nearby store",
};

export const Section08 = () => {
  return (
    <section className={section08Styles.section08}>
      <div>
        <CmnComp props={data} />
      </div>
      <div>
        <ImgCarousel Images={Images} />
      </div>
    </section>
  );
};
