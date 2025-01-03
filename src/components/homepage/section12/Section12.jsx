import { CmnComp } from "../../common/CmnComp";
import section12Styles from "./section12.module.css";

const data = {
  header: "Virtual guidance from home's comfort",
  description:
    "For advice on our range of formulations, we welcome you to book a complimentary live consultation. Following your appointment, you will receive a bespoke product sample when you place an order. ",
  button: "Discover live consultations",
};

export const Section12 = () => {
  return (
    <section className={section12Styles.section12}>
      <div>
        <img src="https://www.aesop.com/u1nb1km7t5q7/48WUU7O1mDZ0jSogoWRyNl/151c278f42d867e1d2dd786e74174ab1/Aesop_IFT_Event_TH_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg" alt="section07" />
      </div>
      <div>
        <CmnComp props={data} />
      </div>
    </section>
  );
};
