import { useParams } from "react-router-dom";
import Pageshead from "../../components/Pageshead/Pageshead";
import ProductsHead from "../../components/ProductsHead/ProductsHead";
import populaproducts from "../../data/popularproducts";
import styles from "./product.module.css";
import singleproduct from "../../data/singleproduct";
import Cards from "../../components/Cards/Cards";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Product = () => {
  const { product } = useParams();
  const item = populaproducts.filter((prod) => prod.text === product)[0];
  const [displayDescription, setDisplayDescription] = useState("");

  return (
    <div id={styles.oneProduct}>
      <Pageshead text={"Products"} />
      <ProductsHead title={product} />
      <p className={styles.desc}>{item.description}</p>
      <div className={styles.cardContainer}>
        <h2>
          Varieties of {product.charAt(0).toUpperCase() + product.slice(1)} We
          export
        </h2>

        <div className={styles.cardgrid}>
          {singleproduct[product].map((prod, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setDisplayDescription(prod.description);
                  document.getElementById('popup').style.display = 'flex';
                }}
              >
                {" "}
                <Cards
                  path={prod.image}
                  text={prod.text}
                  alt={prod.text}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.popup} id="popup">
        <div id={styles.popupContainer}>
          <div className={styles.cross}>
            <IoCloseSharp onClick={()=>{
              setDisplayDescription("");
              document.getElementById('popup').style.display = 'none';
            }}/>
          </div>
          <p>{displayDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
