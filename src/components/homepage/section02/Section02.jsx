import { PreProduct } from "../../carousal/PreProduct";
import { ProductCarousel } from "../../carousal/ProductCarousel";
import section02Styles from "./section02.module.css";

const products = [
  {
    title: "Aromatique Hand Balm Trio",
    description: "Three hydrating hand balms, unique in aroma",
    image: "https://www.aesop.com/u1nb1km7t5q7/1Q6mPopHxJkmIhNM5k36sR/d2d793fd5f24f4887c4cfad9200a0a3a/Aesop_Bundles_Festive_Bundles_GL_2024_Hand_Balm_Trio_Web_Front_Medium_1000x608px.png",
  },
  {
    title: "Ptolemy Aromatique Candle",
    description: "A sensuous blend of leather, smoke and wood",
    image: "./Images/Aesop_product02.webp",
  },
  {
    title: "Reverence Duet",
    description: "A sumptuous pairing for hands",
    image: "https://www.aesop.com/u1nb1km7t5q7/4dpMZI6u7UqOBZUyceVIAk/d1ca775f781a3a2ba49f9eee1328cd0c/Aesop_Kits_Reverence_Duet_Web_Front_A_X-Large_3000x1822px.png",
  },
  {
    title: "Lucent Facial Concentrate",
    description: "A Vitamin C-rich layering serum",
    image: "https://www.aesop.com/u1nb1km7t5q7/5ifei9GSDrk49e8h8biAPg/c9e4b79a3ac5a9a491d5ec89ef8597df/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Front_X-Large_3000x2930px.png",
  },
  {
    title: "Bronze Incense Holder",
    description: "Suited to any interior ",
    image: "./Images/Aesop_product03.webp",
  }
];

export const Section02 = () => {
  return (
    <section className={section02Styles.section02}>
      <div>
        <PreProduct />
      </div>
      <ProductCarousel products={products} showPreProd={true} />
    </section>
  );
};
