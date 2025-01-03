import { ProductCarousel } from "../../carousal/ProductCarousel";
import section06Styles from "./section06.module.css";

const products = [
  {
    title: "Rōzu Eau de Parfum",
    description: "Both brazen and delicate",
    image: "./Images/Aesop_product05.webp",
  },
  {
    title: "Aesop & Rick Owens Travel Kit",
    description: "Fragrant essentials for journeys near or far ",
    image: "./Images/Aesop_product06.webp",
  },
  {
    title: "Miraceti Eau de Parfum",
    description: "Resinous, woody, spicy fragrance",
    image: "./Images/Aesop_product07.png",
  },
  {
    title: "Marrakech Intense Eau de Parfum",
    description: "Woody, opulent, floral fragrance",
    image: "./Images/Aesop_product08.webp",
  },
  {
    title: "Geranium Leaf Body Cleanser",
    description: "A gentle, invigorating gel cleanser",
    image: "./Images/Aesop_product09.webp",
  },
  {
    title: "Sublime Replenishing Night Masque",
    description: "Balances the appearance of skin",
    image: "./Images/Aesop_product10.png",
  },
];

export const Section06 = () => {
  return (
    <section className={section06Styles.section06}>
      <h1>Our latest Gift Kits</h1>
      <p className="px-[35px] md:px-[80px] md:w-1/2">Discover the new cinema-inspired collection, comprising a hand and body gift set, an abundant home gift and a Geranium Leaf body care trio.</p>
      <ProductCarousel products={products} />
    </section>
  );
};
