import { Footer } from "../components/footer/Footer";
import { Section01 } from "../components/homepage/section01/Section01";
import { Section02 } from "../components/homepage/section02/Section02";
import { Section03 } from "../components/homepage/section03/Section03";
import { Section04 } from "../components/homepage/section04/Section04";
import { Section06 } from "../components/homepage/section06/Section06";
import { Section07 } from "../components/homepage/section07/Section07";
import { Section08 } from "../components/homepage/section08/Section08";
import { Section09 } from "../components/homepage/section09/Section09";
import  Section10  from '../components/homepage/section10/Section10'
import  Section11  from '../components/homepage/section11/Section11'
import { Section12 } from "../components/homepage/section12/Section12";
import { Navbar } from "../components/navbar/Navbar";
import { TopNotification } from "../components/navbar/TopNotification";

export const Home = () => {
  return (
    <>
      <nav>
        <TopNotification />
        <Navbar />
      </nav>
      <section className="bg-[#fffef2]">
        <Section01 />
        <Section04 />
        <Section10/>
        <Section02 />
        <Section11/>
        <Section06 />
        <Section03 />
        <Section07 />
        <Section08 />
        <Section12/>
        <Section09 />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
